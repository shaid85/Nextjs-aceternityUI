'use client'
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'
import courseData from '../data/music_courses.json'

interface Course {
  id: number
  title: string
  slug: string
  description: string
  price: number
  instructor: string
  isFeatured: boolean
  image: string
}

export default function FeaturedCourses() {
  const FeatureCourse = courseData.courses.filter(
    (coures: Course) => coures.isFeatured
  )
  console.log(FeatureCourse)

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {FeatureCourse.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] h-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={`${course.image}`}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5">
                  {course.description}
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xl font-bold dark:bg-zinc-800">
                  <span>Enroll Now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    {`->`}
                  </span>
                </button>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
