//Operador, $set, $inc y $push. =)

//$set:Pues si bien se utiliza para cambiar el campo existente o crearlo.

1.- db.Attendees.updateOne(
  { "attendee_id": "a5" },        
  { $set: { "email": "edward.norton@studio.com" } } )

2.- db.Attendees.updateOne({ "attendee_id": "a8" }, 
  { $set: { "email": "HannahAbbott67@proft.com"}})

3.- db.Attendees.updateOne({ "attendee_id": "a10" },
  { $set: { "email": "Jane.D@sgmail.com"}})


//$inc:Se utiliza para aumentar valores numericos.

4.-db.Schedules.updateOne(
  { "schedule_id": "s3" },
  { $inc: { "delay_minutes": 15 } }
)

5.- db.Schedules.updateOne(
  { "schedule_id": "s1" },
  { $inc: { "delay_minutes": 20 } }
)
 
6.- db.Schedules.updateOne(
  { "schedule_id": "s5" },
  { $inc: { "delay_minutes": 30 } }
)


//$push Este se usa especificamente para listas (arrays) ;)

7.- db.Concerts.updateOne(
  { "concert_id": "c1" },
  { $push: { "lineup": "The Rolling Stones" } }
)



