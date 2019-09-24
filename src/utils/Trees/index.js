import React from 'react';
import { monitor } from './monitor'
import { computer } from './computer'
import { notebook } from './notebook'
import { peripheral } from './peripheral'

//types: multi, end, default(c1, c2)

export const root = {
	title: "Seu Equipamento é um desktop ou notebook?",
	data: ['Desktop', 'Notebook'],
	c1: {
		title: 'Desktop',
		data: [
			'Você acredita que o problema esteja relacionado ao computador?', 
			'Você acredita que o problema esteja relacionado ao monitor?', 
			'Você acredita que o problema esteja relacionado aos periféricos?'
		],
		multi: true,
		c1: computer,
		c2: monitor,
		c3: peripheral
	},
	c2: notebook
}