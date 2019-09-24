import React from 'react';
import { computer } from './computer'

const defaultAnswer = ['Sim', 'Não'];

export const notebook = {
	title: 'O led de power do notebook está ligado?',
	data: defaultAnswer,
	c1: {
		title: 'O led encontra-se na cor verde ou branca intermitente?',
		data: defaultAnswer,
		c1: {
			title: 'Seu notebook está emitindo algum aviso sonoro em forma de bipes?',
			data: defaultAnswer,
			c1: {
				title: 'Possíveis problemas:',
				data: ['Existe algum cabo ou sujeira obstruindo o giro do cooler do processador',
				'Cooler não está corretamente fixado na placa mãe',
				'Alguma das pás do cooler encontra-se quebrada',
				'Cooler da fonte com problema.'],
				end: true	
			},
			c2: {
				title: 'Seu notebook está emitindo algum barulho contínuo, arrastado ou batendo?',
				data: defaultAnswer,
				c1: {
					title: 'Possíveis problemas:',
					data: ['existe algum cabo ou sujeira obstruindo o giro do cooler do processador',
						'Cooler não está corretamente fixado na placa mãe',
						'Alguma das pás do cooler encontra-se quebrada'],
					end: true,
				},
				c2: {
					title: 'Seu notebook está funcionando normalmente. Se percebe que ainda existe algum problema, entre em contato com o técnico.',
					data: [],
					end: true,
				}
			}
		},
		c2: {
			title: 'A luz está piscando em padrão âmbar?',
			data: defaultAnswer,
			c1: {
				title: 'Identifique dentre as opções a que mais se assemelha ao padrão do seu notebook:',
				data: '', //TODO: criar componentes com imagem e texto
				GIF: true,
				end: true
			}
		}
	},
	c2: {
		title: 'O notebook está com a fonte de energia na tomada?',
		data: defaultAnswer,
	}
}