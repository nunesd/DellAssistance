import React from 'react';
import { monitor } from './monitor'
import LED from '../../components/Leds/LED';
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
				data: [
					<LED title='Placa-mãe com defeito' src="../../assets/Leds/1_1.gif" key="1" />,
					<LED title='Placa-mãe, fonte de alimentação ou cabeamento com defeito' src="../../assets/Leds/1_2.gif" key="2" />,
					<LED title='Placa-mãe, memória/RAM ou CPU com defeito' src="../../assets/Leds/1_4.gif" key="3" />,
					<LED title='Bateria de célula tipo moeda com defeito' src="../../assets/Leds/1_4.gif" key="4" />,
					<LED title='Erro na CPU' src="../../assets/Leds/2_1.gif" key="5" />,
					<LED title='Motherboard (Placa-mãe): Falha da ROM BIOS' src="../../assets/Leds/2_2.gif" key="6" />,
					<LED title='Nenhuma memória/RAM detectada' src="../../assets/Leds/2_3.gif" key="7" />,
					<LED title='Falha de memória/RAM' src="../../assets/Leds/2_4.gif" key="8" />,
					<LED title='Memória invalida instalada' src="../../assets/Leds/2_5.gif" key="9" />,
					<LED title='Erro na placa-mãe/chipset' src="../../assets/Leds/2_6.gif" key="10" />,
					<LED title='Falha do LCD' src="../../assets/Leds/2_7.gif" key="11" />,
					<LED title='Erro na bateria CMOS' src="../../assets/Leds/3_2.gif" key="12" />,
					<LED title='Falha em PCI ou placa de vídeo/chip' src="../../assets/Leds/3_3.gif" key="12" />,
				],
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