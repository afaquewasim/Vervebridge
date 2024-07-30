import React from 'react';

const DescriptionBox = () => {
    return (
        <div className='my-10 mx-4 md:mx-40'>
            <div className="navigator flex flex-wrap md:flex-nowrap text-base md:text-xl font-semibold">
                <div className="navBox flex items-center justify-center w-full md:w-44 h-16 md:h-20 border border-1 border-[#474747] mb-4 md:mb-0 md:mr-4">
                    Description
                </div>
                <div className="navBoxFade flex items-center justify-center w-full md:w-44 h-16 md:h-20 border border-1 border-[#555] bg-[#ccc] text-[#151515]">
                    Reviews (122)
                </div>
            </div>
            <div className='flex flex-col gap-4 md:gap-6 border border-1 border-[#555] p-6 md:p-12 pb-8 md:pb-16 text-base md:text-xl'>
                <p className='text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id corrupti qui optio provident illum eaque sint, fuga sunt in cumque necessitatibus consequuntur nisi ratione! Doloremque in tenetur labore debitis doloribus.
                    Hic dolorem at mollitia soluta, commodi accusantium itaque? Deleniti fuga nihil temporibus amet nobis molestias excepturi, labore, autem, magnam porro asperiores at dicta itaque. Voluptates ipsa totam error quo voluptate!
                </p>
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptas dolor pariatur eaque nesciunt sapiente nihil ratione, maiores ducimus consectetur dolorem nulla officiis ut natus sit animi laboriosam quo ipsum?
                </p>
            </div>
        </div>
    );
}

export default DescriptionBox;
