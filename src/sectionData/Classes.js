import meditationSvg from 'assets/mindfulness.svg'
import yogaSvg from 'assets/yoga.svg'

export default {
	id: 'classes',
	format: 0,
	data: [
		{
			id: 'kundalini',
			text: {
				title: 'Kundalini Yoga',
				description: 'Tuesday Evenings 19:00-20:15',
			},
			image: {
				img: yogaSvg,
				alt: 'one'
			},
			more: [
				'Kundalini Yoga is the technology that allows our body & mind to unite with the aid of asanas (physical exercises), pranayama (breathwork) and vibrational sound (chanting) to rise the energy through the Nadis (meridians) promoting wellbeing and a deeper connection with the higher self. This class is open to all levels and abilities of yogi and yoginis.',
				'All attendance must be pre-booked. Classes will be limited to 6 sudents to conform with Covid guidelines.'
			]
		},
		{
			id: 'hatha',
			text: {
				title: 'Hatha Yoga',
				description: 'Thursday Evenings 19:00-20:00',
			},
			image: {
				img: meditationSvg,
				alt: 'one'
			},
			more: [
				'Traditional yoga class for the everyone including beginner level and inviting ‘the inflexible male’. This class incorporates a short meditation to connect body, soul & mind and prepare us for the yoga set. This hatha class aims to help the body to find strength & flexibility. There are over 84 postures in yoga that a baby does during pregnancy. We will work to find the qualities that we were born with, (but have moved away from with our modern western lifestyle).',
				'All attendance must be pre-booked. Classes will be limited to 6 sudents to conform with Covid guidelines.'
			]
		}
	]
}