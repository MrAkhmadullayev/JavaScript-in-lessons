// objects

const car = {
	egasi: 'Ali',
	raqami: '90A123AA',
	tezligi: 90,
}

const radar = {
	tezlik: 60,
	jarima_summasi: (() => {
		if (car.tezligi > 60 && car.tezligi <= 80) return 412000
		if (car.tezligi > 80 && car.tezligi <= 100) return 824000
		if (car.tezligi > 100 && car.tezligi <= 120) return 1648000
		return 0
	})(),
	moshina_egasi: car.egasi,
	moshina_raqami: car.raqami,
	date: new Date().toLocaleDateString(),
}

console.log(radar)
