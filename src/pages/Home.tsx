import heroimage from '../assets/MavelImage/1a.png'
import fade from '../assets/fade.png'
import {Button,  Button2, Button3 } from '../components/Button';
import { StackIcon } from '../components/StackIcons';
import { WorksData } from '../components/Works';
// import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Home = ({isDark}:any) => {

    const about = '</AboutMe >'
    const skills = '</Skills >'

    const dark = 'bg-gradient-to-r from-stone-950 to-neutral-950 text-white '
    const light = 'bg-gradient-to-r from-white to-pink-50 text-black'

    const dark2 = 'bg-neutral-950 text-white'
    const light2 = 'bg-white text-neutral-900'

    const handleMail = () => {
        window.open('mailto:Marvellousemmanuel30@gmail.com', '_blank')
    }

    
  return (
    <div>
        <section id='home' className={`flex relative overflow-hidden lg:pt-[20rem] pt-[13rem] 2xl:px-[20rem] xl:px-[10rem] lg:px-[8rem] px-5 ${isDark === true ? dark : light}  2xl:h-[95vh] `}>
            <div className='w-full' data-aos="fade-up" data-aos-duration="600">
                <p className='special'>Hello👋; </p>
                <h2 className='special 2xl:text-6xl xl:text-4xl lg:text-3xl text-2xl font-bold lg:py-5 py-3'>I'm Marvellous Emmanuel</h2>
                <h2 className=' 2xl:text-6xl xl:text-4xl lg:text-3xl text-4xl lg:pt-3 pt-0 font-extrabold bg-gradient-to-l from-yellow-200 to-green-400 bg-clip-text text-transparent'>I Brand | Design | Create</h2>
                <p className='lg:w-[65%] w-full pt-6 2xl:text-lg xl:text-base lg:text-sm text-sm  font-light leading-[30px]'>
                Am a Graphic and Brand Designer specializing in creating visually compelling 
                designs and cohesive brand identities.
                </p>
                <Button title='Lets Chat' action={handleMail}/>
            </div>
            
            <div>
                <img className='absolute right-[-45rem] bottom-[-17rem] w-[120%]' src={fade} alt="" />
            </div>
        </section>

        
        
        <section id='about' className={`lg:flex lg:flex-row flex flex-col-reverse lg:py-[10rem] py-[5rem] items-center text-base 2xl:px-[20rem] xl:px-[10rem] lg:px-[8rem] px-5 w-full lg:gap-[5rem] gap-[3rem] ${isDark === true ? dark2 : light2} `}>
            <div className='w-[full]' data-aos="fade-up" data-aos-duration="600">
                <p className='special text-2xl bg-gradient-to-r from-orange-300 to-green-600 bg-clip-text text-transparent'>{about}</p>
                <p className='lg:w-[80%] 2xl:text-lg xl:text-base lg:text-sm text-sm  w-full font-light text-left mt-10 leading-[1.8rem]'>
                    Am a Graphic and Brand Designer specializing in creating visually compelling 
                    designs and cohesive brand identities. <br /> <br /> With expertise in logo design, typography, 
                    and visual storytelling, I helps businesses communicate their values and stand 
                    out in a competitive market.
                </p>

                <a href="https://drive.google.com/file/d/1Xkw1l4_0p1Jgo25amOliRs6GX0qIduHm/view?usp=sharing">
                    <Button2 title='Resume'/>
                </a>
            </div>

            <div className='lg:w-[90%] w-full ml-auto' data-aos="fade-up" data-aos-duration="1000">
                <img className='w-full' src={heroimage} alt="" />
            </div>
        </section>


        <section id='skills' className={` lg:py-[10rem] py-[5rem] 2xl:px-[20rem] xl:px-[10rem] lg:px-[8rem] px-5 ${isDark === true ? dark : light2}`}>
            <p className='special text-center text-2xl bg-gradient-to-r from-orange-300 to-green-400 bg-clip-text text-transparent'>{skills}</p>
            <div className='flex flex-wrap gap-8 items-center justify-center pt-14'>
                {StackIcon.map((stack) =>(
                    <div data-aos="fade-up" data-aos-duration="600" className='flex-col justify-center'>
                        <div className={`${isDark === true ? 'bg-neutral-800 text-white border border-neutral-700' : 'bg-neutral-100 border border-neutral-200 text-neutral-950'} rounded-full `}>
                            <div className='flex-col gap-2 items-center '>
                                <p className='text-center 2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl 2xl:p-8 xl:p-5 lg:p-5 md:p-4 text-5xl p-6'>{stack.icon}</p>
                            </div>
                        </div>
                        <p className='text-xs m-auto flex justify-center pt-4'>{stack.name}</p>
                    </div>
                ))}
            </div>
        </section>


        <section id='projects' className={` lg:py-[7rem] py-[5rem] 2xl:px-[20rem] xl:px-[10rem] lg:px-[8rem] px-5 ${isDark === true ? dark : light2}`}>
            <p className='special text-2xl bg-gradient-to-r from-orange-300 to-green-600 bg-clip-text text-transparent'>{'</Projects >'}</p>
            
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 gap-6  grid-cols-1 items-center mt-10'>
                <PhotoProvider>
                {WorksData.map((data, index)=>(
                    <div data-aos="fade-up" data-aos-duration="600" key={index} className={'rounded-2xl'}>
                        <div className='overflow-hidden aspect-square rounded-xl bg-white'>
                            <PhotoView src={data.image}>
                                <img src={data.image} alt=""  className='w-full h-full object-cover'/>
                            </PhotoView>
                        </div>
                    </div>
                ))}
                </PhotoProvider>
            </div>
        </section>

        <section id='experience' className={` lg:py-[7rem] py-[5rem] 2xl:px-[20rem] xl:px-[10rem] lg:px-[8rem] px-5 ${isDark === true ? dark : light2}`}>
            <p className='special text-2xl bg-gradient-to-r from-orange-300 to-green-600 bg-clip-text text-transparent'>{'</ Work Experience >'}</p>

            <div className={`flex flex-col gap-7 mt-8 ${isDark === true ? '' : ''}`}>

                <div className={`p-5 rounded-md ${isDark === true ? 'bg-neutral-800 text-neutral-100' : 'bg-neutral-100 text-neutral-700'}`}>
                    <p className='special lg:text-2xl text-lg font-bold'>Graphic Designer - Egoras Technologgy</p>
                    <p className='text-sm pt-3 text-neutral-400'>Port Harcourt, Nigeria</p>
                </div>

                <div className={`p-5 rounded-md ${isDark === true ? 'bg-neutral-800 text-neutral-100' : 'bg-neutral-100 text-neutral-700'}`}>
                    <p className='special lg:text-2xl text-lg font-bold'>Graphic Designer - BoundlessPay</p>
                    <p className='text-sm pt-3 text-neutral-400'>Lagos, Nigeria</p>
                </div>

                <div className={`p-5 rounded-md ${isDark === true ? 'bg-neutral-800 text-neutral-100' : 'bg-neutral-100 text-neutral-700'}`}>
                    <p className='special lg:text-2xl text-lg font-bold'>Graphic Designer - GrindEarn</p>
                    <p className='text-sm pt-3 text-neutral-400'>Lagos, Nigeria</p>
                </div>
                
                <div className={`p-5 rounded-md ${isDark === true ? 'bg-neutral-800 text-neutral-100' : 'bg-neutral-100 text-neutral-700'}`}>
                    <p className='special lg:text-2xl text-lg font-bold'>Graphic Designer - BMP Inovations</p>
                    <p className='text-sm pt-3 text-neutral-400'>Port Harcourt, Nigeria</p>
                </div>

            </div>
        </section>

    </div>
  )
}

export default Home