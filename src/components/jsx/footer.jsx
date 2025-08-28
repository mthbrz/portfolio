import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-purple-50 text-slate-950 dark:bg-slate-950 dark:text-purple-50 transition-colors duration-500 py-4">
        <div className="container mx-auto text-center text-2xl">
          <h2>Portfolio made with love. &copy; {new Date().getFullYear()}</h2>
          <h2>Tous droits réservés.</h2>
        </div>
      </footer>
    </div>
  )
}

export default Footer
