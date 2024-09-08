import React from 'react'
import Image from 'next/image';
import myImage from "@/app/Images/About.jpg";

const page = () => {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <Image className="w-24 h-24 rounded-full mx-auto" src={myImage} alt="My Image" width="384" height="512"></Image>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      My name in Waleed Ali.I am artificial intellegance student.I am 21 years old.Thank you fot giving me this oppertunity.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Waleed Ali
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Roll No 2234
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default page
