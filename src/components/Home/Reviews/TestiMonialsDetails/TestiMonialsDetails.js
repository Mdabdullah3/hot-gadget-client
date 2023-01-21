import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    console.log(name)
    return (
        <div className="item">
            <div className="shadow-effect p-8 rounded text-center bg-gradient-to-r from-[#156355] to-[#00C2B4] font-mono">
                <img className='img-circle' src={img} alt="" />
                <p className='text-lg text-white py-4'>{description}</p>
            </div>
            <div className="testimonial-name bg-gradient-to-r from-[#156355] to-[#00C2B4] font-mono">
                <h5 className='text-xl'>{name}</h5>
                <small className='text-lg'>{address}</small>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;