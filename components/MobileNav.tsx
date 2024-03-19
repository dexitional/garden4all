import React from 'react'

type Props = {}

function MobileNav({}: Props) {
  return (
    <div>
        {/* Hamberger button */}
        <button className="md:hidden px-3 py-0.5 border border-white rounded">
            <div className="text-3xl">=</div>
        </button>
        {/* Menu */}
    </div>
  )
}

export default MobileNav