import React from 'react';
import { monitor } from './monitor'
import { computer } from './computer'

const defaultAnswer = ['Sim', 'Não'];

export const peripheral = {
	title: 'O computador e o monitor estão funcionando normalmente?',
	data: defaultAnswer,
	c1: {
		title: 'O periférico está corretamente conectado em uma porta USB do computador?',
		data: defaultAnswer,
		c1: {
			title: 'Teste este mesmo periférico em outro computador que tenha o funcionamento garantido. Funcionou?',
			data: defaultAnswer,
			c1: {
				title: 'Possíveis problemas:',
				data :['Porta(s) USB do seu computador pode(m) estar queimada(s).',
					'Seu computador pode estar com problemas e drivers.'],
				end: true,
			},
			c2: {
				title: 'Substitua este equipamento, pois o mesmo está danificado.',
				data: [],
				end: true	
			}
		},
		c2: {
			title: 'Faça a conexão correta do periférico em uma porta USB do computador.',
			data: [],
			end: true,
		}
	}
}