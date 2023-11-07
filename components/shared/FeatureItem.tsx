import React from 'react'

const FeatureItem = ({ content }) => {
  const { name = '', description = '', icon: Icon = '' } = content
  return (
    <div key={name} className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg">
          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        {name}
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">{description}</dd>
    </div>
  )
}

export default FeatureItem
