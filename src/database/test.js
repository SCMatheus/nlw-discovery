const Database = require('./db.js');

const saveOrphanage = require('./saveOrphanage.js');

Database.then(async (db) => {
   await db.run('DELETE FROM orphanages');
  
  // //inserir dados na tabela
  // await saveOrphanage(db, {
  //   lat: "-16.6817445",
  //   lng: "-49.2562558",
  //   name: "Lar dos meninos",
  //   about: "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",    
  //   whatsapp: "62 98237-3616",
  //   images: [
  //     "https://images.unsplash.com/photo-1591485112902-5b328dd94296?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //     "https://images.unsplash.com/photo-1601564921647-b446839a013f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
  //   ].toString(),
  //   instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //   opening_hours: "Horario de visitas das 8h até 18h",
  //   open_on_weekends: "0"
  // });
  //consultar dados da tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages");

  console.log(selectedOrphanages);
});