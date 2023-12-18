import Image from 'next/image';

function Collaborate() {
  return (
    <>
      <div className='w-screen' id='collaborate'>
        <div className='mx-auto my-36 h-full max-w-screen-2xl px-12 '>
          <div className='flex h-full w-full flex-col  justify-center gap-2 text-start'>
            <span className='text-[100px] font-extrabold text-primary'>
              Thank You. <br /> Lets Collaborate!
            </span>
          </div>
          <div className='mb-12 '>
            <div className='mt-12 flex flex-col gap-5'>
              <a
                href='mailto:ramadwiyantara1@gmail.com'
                className=' inline-flex items-center gap-2'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/picture/email.png'
                  alt='email'
                  width={50}
                  height={50}
                />
                <span className='text-2xl'>ramadwiyantara1@gmail.com</span>
              </a>
              <a
                href='https://wa.me/6288971753162'
                className=' inline-flex items-center gap-2'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Image
                  src='/picture/phone.png'
                  alt='phone'
                  width={45}
                  height={45}
                />
                <span className='text-2xl'>+62 889 7175 3162</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collaborate;
