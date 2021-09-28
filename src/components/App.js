import '../styles/App.scss';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

function App() {
  const [stateDesign, setStateDesign] = useState('hidden');
  const [stateFill, setStateFill] = useState('hidden');
  const [stateShare, setStateShare] = useState('hidden');

  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowFill, setArrowFill] = useState('');
  const [arrowShare, setArrowShare] = useState('');
  const [data, setData] = useState({
    palette: '',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });

  const handleCollapsable = (id) => {
    const selected = id;
    console.log(selected);
    if (selected === 'collapseDesign') {
      setStateDesign('');
      setStateFill('hidden');
      setStateShare('hidden');
      setArrowDesign('rotateArrowUp');
      setArrowFill('');
      setArrowShare('');
    } else if (selected === 'collapseFill') {
      setStateDesign('hidden');
      setStateFill('');
      setStateShare('hidden');
      setArrowDesign('');
      setArrowFill('rotateArrowUp');
      setArrowShare('');
    } else if (selected === 'collapseShare') {
      setStateDesign('hidden');
      setStateFill('hidden');
      setStateShare('');
      setArrowDesign('');
      setArrowFill('');
      setArrowShare('rotateArrowUp');
    }
  };
  const handleInput = (value,name) => {
    const whichInput = name;
    if (whichInput === 'name') {
      setData({ ...data, name: value });
    } else if (whichInput === 'job') {
      setData({ ...data, job: value });
    } else if (whichInput === 'phone') {
      setData({ ...data, phone: value });
    } else if (whichInput === 'email') {
      setData({ ...data, email: value });
    } else if (whichInput === 'linkedin') {
      setData({ ...data, linkedin: value });
    } else if (whichInput === 'github') {
      setData({ ...data, github: value });
    }
  };
  return (
    <div>
      <div className='page_interactive'>
        <Header />
        <main className='main_interactive'>
          <section className='card__first__view'>
            <div className='card__result'>
              <button className='button__reset'>
                <i className='far fa-trash-alt'></i> reset
              </button>

              <div className='card__example palette_0'>
                <div className='text__section color_line'>
                  <h3 className='name__card color_text'>
                    {data.name === '' ? 'groot!' : data.name}
                  </h3>
                  <h4 className='job__name color_job'>
                    {data.job === '' ? 'groot developer' : data.job}
                  </h4>
                </div>

                <div className='photo__example'>
                  <div
                    alt='yourlogo'
                    title='yourlogo'
                    className='photo__example--logo profile__image'
                  ></div>
                </div>

                <div className='link__section'>
                  <a
                    className='circle__awesome color_circle'
                    href={'tel:' + data.phone}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fas fa-mobile-alt'></i>
                  </a>

                  <a
                    className='circle__awesome color_circle'
                    href={'mailto:' + data.email}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='far fa-envelope'></i>
                  </a>

                  <a
                    className='circle__awesome color_circle'
                    href={'https://www.linkedin.com/in/' + data.linkedin}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fab fa-linkedin-in'></i>
                  </a>

                  <a
                    className='circle__awesome color_circle'
                    href={'https://github.com/' + data.github}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fab fa-github-alt'></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <Form data={data} stateDesign={stateDesign} arrowDesign={arrowDesign} stateFill={stateFill} arrowFill={arrowFill} stateShare={stateShare} arrowShare={arrowShare} handleInput={handleInput} handleCollapsable={handleCollapsable} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
