import { useState, useMemo } from "react";
import Modal from "react-modal";
import DatePicker, { registerLocale, setDefaultLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';

import { addHours, differenceInSeconds } from "date-fns";
import es from 'date-fns/locale/es';
registerLocale('es', es);
setDefaultLocale('es');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
  
Modal.setAppElement('#root');

export const CalendarModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(true);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        title: 'Joy',
        notes: 'Marcelle',
        start: new Date(),
        end: addHours(new Date(), 2)
    });

    const titleClass = useMemo(() => {
        if(!isFormSubmitted) return;

        return formValues.title.length > 0 ? '' : 'is-invalid';
    }, [formValues.title, isFormSubmitted]);

    const onInputChanged = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onCloseModal = () => {
        setIsOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setIsFormSubmitted(true);

        // if end date is greater than start return
        const difference = differenceInSeconds(formValues.end, formValues.start);

        if(isNaN(difference) || difference <=0){
            Swal.fire('Dates error', 'Please check start and end date', 'error');
            return;
        }

        if(formValues.title.length<=0){
            console.log('Title is required');
            return;
        }

        // TO DO: Close modal
        // TO DO: Remove errors
    }

  return (
    <Modal
        className='modal'
        closeTimeoutMS={200}
        isOpen={isOpenModal}
        onRequestClose={onCloseModal}
        style={customStyles}
        overlayClassName='modal-fondo'
    >
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={onSubmit}>

            <div className="form-group mb-2">
                <label>Fecha y hora inicio</label>
                <DatePicker
                    className="form-control"
                    dateFormat="Pp"
                    onChange={ (event)=>{ onDateChanged(event, 'start') }}
                    selected={ formValues.start }
                    showTimeSelect
                    timeCaption="Hora"
                />
            </div>

            <div className="form-group mb-2">
                <label>Fecha y hora fin</label>
                <DatePicker
                    className="form-control"
                    dateFormat="Pp"
                    minDate={formValues.start}
                    onChange={ (event)=>{ onDateChanged(event, 'end') }}
                    selected={ formValues.end }
                    showTimeSelect
                    timeCaption="Hora"
                />
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className={`form-control ${titleClass}`}
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                    onChange={onInputChanged}
                    value={formValues.title}
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group mb-2">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    onChange={onInputChanged}
                    value={formValues.notes}
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>        
    </Modal>
  )
}
