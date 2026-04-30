//Operador, $set, $inc y $push. =)

//$set:Pues si bien se utiliza para cambiar el campo existente o crearlo.

//db.Attendees.updateOne(
  { "attendee_id": "a5" },        
  { $set: { "email": "edward.norton@studio.com" } } )

//db.Attendees.updateOne({ "attendee_id": "a8" }, 
  { $set: { "email": "HannahAbbott67@proft.com"}})

//db.Attendees.updateOne({ "attendee_id": "a10" },
  { $set: { "email": "Jane.D@sgmail.com"}})


//$inc:Se utiliza para aumentar valores numericos.

//db.Schedules.updateOne(
  { "schedule_id": "s3" },
  { $inc: { "delay_minutes": 15 } }
)

//db.Schedules.updateOne(
  { "schedule_id": "s1" },
  { $inc: { "delay_minutes": 20 } }
)
 
//db.Schedules.updateOne(
  { "schedule_id": "s5" },
  { $inc: { "delay_minutes": 30 } }
)


//$push Este se usa especificamente para listas (arrays) ;)

//db.Concerts.updateOne(
  { "concert_id": "c1" },
  { $push: { "lineup": "The Rolling Stones" } }
)



