import React from 'react';
import { monitor } from './monitor'
const defaultAnswer = ['Sim', 'Não'];

export const computer = {
	title: 'O led de power do computador está ligado?',
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
					title: 'Se percebe que ainda existe algum problema? tente o diagnóstico de monitor ou periféricos.',
					data: ['Encerrar diagnóstico', 'Direcionar para diagnóstico de monitor.'],
					c1: {
						title: 'Seu computador está funcionando normalmente.',
						data: [],
						end: true,
					},
					c2: monitor,
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
		title: 'O computador está com os cabos na tomada?',
		data: defaultAnswer,
		c1: {
			title: 'Teste outro equipamento elétrico na mesma tomada para certificar-se de que está funcionando corretamente. Funcionou?',
			data: defaultAnswer,
			c1: {
				title: 'Teste outro equipamento elétrico na mesma tomada para certificar-se de que está funcionando corretamente. Funcionou?',
				data: defaultAnswer,
				c1: {
					title: 'O problema provavelmente encontra-se em sua fonte de energia do computador. Faça a substituição da peça.',
					data: [],
					end: true,
				},
				c2: {
					title: 'Problema identificado no cabo de energia do computador.',
					data: [],
					end: true,
				}
			},
			c2: {
				title: 'Identificado problema na tomada de energia utilizada. Conecte o equipamento em outra fonte de energia.',
				data: [],
				end: true
			}
		},
		c2: {
			title: 'Conecte os cabos de força do computador em uma tomada adequada, respeitando sua tensão.',
			data: [],
			end: true
		}
	}
}