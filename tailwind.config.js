/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		extend: {
			screens: {
				// sm:640px
				// md:768px
				'2md': '832px', //md+64
				'3md': '896px', //2*64
				'4md': '960px',
				// lg: 1024px ,
				'2lg': '1088px',
				//xl:1280px ,
				//2xl:1536px ,
			},
			colors: {
				'green-yellow': {
        '50': '#f9ffe6',
        '100': '#eeffc8',
        '200': '#ddff97',
        '300': '#c3fb5b',
        '400': '#aaf12a',
        '500': '#9bf10c',
        '600': '#6aac04',
        '700': '#508308',
        '800': '#42670d',
        '900': '#375710',
        '950': '#1b3102',
				},
				'selective-yellow': {
        '50': '#fffeea',
        '100': '#fffac5',
        '200': '#fff585',
        '300': '#ffe946',
        '400': '#ffd91b',
        '500': '#ffb901',
        '600': '#e28e00',
        '700': '#bb6402',
        '800': '#984d08',
        '900': '#7c3f0b',
        '950': '#482000',
        },
         'science-blue': {
        '50': '#f0f7ff',
        '100': '#e0effe',
        '200': '#b9dffe',
        '300': '#7cc5fd',
        '400': '#36a9fa',
        '500': '#0c8eeb',
        '600': '#0066b8',
        '700': '#0158a3',
        '800': '#064b86',
        '900': '#0b3f6f',
        '950': '#07284a',
        },
         'denim': {
        '50': '#f0f7ff',
        '100': '#e1edfd',
        '200': '#bcdbfb',
        '300': '#80bef9',
        '400': '#3d9df3',
        '500': '#1481e3',
        '600': '#075fb8',
        '700': '#07509d',
        '800': '#0a4482',
        '900': '#0f3a6b',
        '950': '#0a2547',
        },
         'concrete': {
        '50': '#f8f8f8',
        '100': '#f2f2f2',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
        },
         'storm-dust': {
        '50': '#f5f6f6',
        '100': '#e5e7e8',
        '200': '#ced1d3',
        '300': '#acb1b4',
        '400': '#83898d',
        '500': '#686e72',
        '600': '#5b6064',
        '700': '#4c4f52',
        '800': '#434547',
        '900': '#3b3c3e',
        '950': '#242628',
    },
         
			}
		},
	},
	plugins: [],
};
