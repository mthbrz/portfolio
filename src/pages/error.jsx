import React from 'react'

function Error() {
  return (
    <>
    <div className="flex flex-col items-center justify-center pt-20 gap-5 text-3xl bg-purple-50 dark:bg-slate-950 text-slate-950 dark:text-purple-50 transition-colors duration-500">
      <h1>404 - Page Not Found</h1>
      <p>Désolé.e, la page que vous recherchez n'existe pas.</p>
      <p>Mais vous pouvez retourner à la page d'accueil <a href="/" className="text-purple-800 dark:text-purple-300 font-bold underline">ici</a>.</p>
    </div>
    </>
  )
}

export default Error
