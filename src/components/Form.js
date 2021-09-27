import '../styles/pages/Form.scss';
import { useState } from 'react';
const Form = () => {
  const [stateDesign, setStateDesign] = useState('hidden');
  const [stateFill, setStateFill] = useState('hidden');
  const [stateShare, setStateShare] = useState('hidden');

  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowFill, setArrowFill] = useState('');
  const [arrowShare, setArrowShare] = useState('');
  const [data, setData] = useState({
    palette: 1,
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });
  const handleCollapsable = (ev) => {
    const selected = ev.currentTarget;
    console.log(selected);
    if (selected.id === 'collapseDesign') {
      setStateDesign('');
      setStateFill('hidden');
      setStateShare('hidden');
      setArrowDesign('rotateArrowUp');
      setArrowFill('');
      setArrowShare('');
    } else if (selected.id === 'collapseFill') {
      setStateDesign('hidden');
      setStateFill('');
      setStateShare('hidden');
      setArrowDesign('');
      setArrowFill('rotateArrowUp');
      setArrowShare('');
    } else if (selected.id === 'collapseShare') {
      setStateDesign('hidden');
      setStateFill('hidden');
      setStateShare('');
      setArrowDesign('');
      setArrowFill('');
      setArrowShare('rotateArrowUp');
    }
  };
  const handleInput = (ev) => {
    const whichInput = ev.currentTarget.name;
    if (whichInput === 'name') {
      setData({ ...data, name: ev.currentTarget.value });
    } else if (whichInput === 'job') {
      setData({ ...data, job: ev.currentTarget.value });
    } else if (whichInput === 'phone') {
      setData({ ...data, phone: ev.currentTarget.value });
    } else if (whichInput === 'email') {
      setData({ ...data, email: ev.currentTarget.value });
    } else if (whichInput === 'linkedin') {
      setData({ ...data, linkedin: ev.currentTarget.value });
    } else if (whichInput === 'github') {
      setData({ ...data, github: ev.currentTarget.value });
    }
  };
  return (
    <form className='form'>
      <section className='select'>
        <fieldset className='desing'>
          <section
            onClick={handleCollapsable}
            id='collapseDesign'
            className='section--title desing__title'
          >
            <i className='far fa-object-ungroup icon'></i>
            <h3 className='title title2'>Diseña</h3>
            <i className={`fas fa-chevron-down arrow ${arrowDesign}`}></i>
          </section>

          <section className={`options ${stateDesign}`}>
            <h6 className='options__subtitle subtitle'>Colores</h6>
            <div className='radio'>
              <div className='option'>
                <label htmlFor='color'> </label>
                <input
                  id='color'
                  type='radio'
                  name='color'
                  value='0'
                  defaultChecked
                />
                <div className='colors-container'>
                  <div className='colors-container__color dark_green_blue'></div>
                  <div className='colors-container__color dirty_blue'></div>
                  <div className='colors-container__color hospital_green'></div>
                </div>
              </div>

              <div className='option'>
                <label htmlFor='color'> </label>
                <input id='color' type='radio' name='color' value='1' />
                <div className='colors-container'>
                  <div className='colors-container__color dried_blood'></div>
                  <div className='colors-container__color rusty_red'></div>
                  <div className='colors-container__color tomato'></div>
                </div>
              </div>

              <div className='option'>
                <label htmlFor='color'> </label>
                <input id='color' type='radio' name='color' value='2' />
                <div className='colors-container'>
                  <div className='colors-container__color slate'></div>
                  <div className='colors-container__color faded_orange'></div>
                  <div className='colors-container__color light_grey_blue'></div>
                </div>
              </div>
            </div>
          </section>
        </fieldset>

        <fieldset className='fill'>
          <section
            onClick={handleCollapsable}
            id='collapseFill'
            className='section--title'
          >
            <i className='far fa-keyboard icon'></i>
            <h3 className='title '>Rellena</h3>
            <i className={`fas fa-chevron-down arrow ${arrowFill}`}></i>
          </section>

          <section className={stateFill}>
            <div className='fill__data'>
              <label htmlFor='name' className='fill__label'>
                Nombre completo
                <span className='fill__label--asterisk'>*</span>
              </label>
              <input
                id='name'
                placeholder='Ej: Groot!'
                type='text'
                name='name'
                className='fill__input'
                required=''
                onChange={handleInput}
                value={data.name}
              />
              <label htmlFor='job' className='fill__label'>
                Puesto<span className='fill__label--asterisk'>*</span>
              </label>

              <input
                id='job'
                placeholder='Ej: Groot-developer'
                type='text'
                name='job'
                className='fill__input'
                required=''
                onChange={handleInput}
                value={data.job}
              />
            </div>

            <div className='fill__photo'>
              <label htmlFor='photo' className='fill__label'>
                Imagen de perfil
                <span className='fill__label--asterisk'>*</span>
              </label>

              <label className='fill__photo--upload-btn' htmlFor='img-selector'>
                Añadir imagen
              </label>
              <input
                type='file'
                name='photo'
                id='img-selector'
                className='fill__photo--hiddenField'
              />

              <div className='fill__photo--preview'></div>
            </div>

            <div className='fill__media'>
              <label htmlFor='email' className='fill__label'>
                Email<span className='fill__label--asterisk'>*</span>
              </label>
              <input
                id='email'
                placeholder='Ej: iamgroot@gmail.com'
                type='email'
                name='email'
                className='fill__input'
                required=''
                onChange={handleInput}
                value={data.email}
              />
              <label htmlFor='phone' className='fill__label'>
                Teléfono<span className='fill__label--asterisk'>*</span>
              </label>
              <input
                id='phone'
                placeholder='Ej: 555-55-55-55'
                type='tel'
                name='phone'
                className='fill__input'
                required=''
                onChange={handleInput}
                value={data.phone}
              />
              <label htmlFor='linkedin' className='fill__label'>
                Linkedin<span className='fill__label--asterisk'>*</span>
              </label>
              <input
                id='linkedin'
                placeholder='Ej: linkedin.com/Groot'
                type='text'
                name='linkedin'
                className='fill__input'
                required=''
                onChange={handleInput}
                value={data.linkedin}
              />
              <label htmlFor='github' className='fill__label'>
                Github<span className='fill__label--asterisk'>*</span>
              </label>
              <input
                id='github'
                placeholder='Ej: @Groot!'
                type='text'
                name='github'
                className='fill__input'
                required=''
                onChange={handleInput}
                value={data.github}
              />
            </div>
          </section>
        </fieldset>

        <fieldset className='share'>
          <section
            onClick={handleCollapsable}
            id='collapseShare'
            className='section--title'
          >
            <i className='fas fa-share-alt icon'></i>
            <h3 className='title '>Comparte</h3>
            <i className={`fas fa-chevron-down arrow ${arrowShare}`}></i>
          </section>

          <section className={stateShare}>
            <button className='share--button'>
              <i className='far fa-id-card'></i>
              <span> Crear tarjeta</span>
            </button>

            <div className='hidden'>
              <section className='creada js-twitter-share'>
                <h3 className='creada--title'>La tarjeta ha sido creada:</h3>
                <p className='creada--p js-card-link'></p>
                {/* <!-- pendiente hacerlo interactivo --> */}
                <button className='creada--button'>
                  <i className='fab fa-twitter'></i>
                  <span className='span'>Compartir en twitter</span>
                </button>
              </section>
              <div>
                <p className='js-hidden-box'>
                  Necesita rellenar todos los campos
                </p>
              </div>
            </div>
          </section>
        </fieldset>
      </section>
    </form>
  );
};
export default Form;
