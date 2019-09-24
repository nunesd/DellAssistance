import React from 'react';
import { computer } from './computer'
import LED from '../../components/Leds/LED';
import logo from '../../assets/Leds/1_1.gif';
import logo1 from '../../assets/Leds/1_2.gif';
import logo2 from '../../assets/Leds/1_4.gif';
import logo3 from  '../../assets/Leds/2_1.gif';
import logo4 from '../../assets/Leds/2_2.gif';
import logo5 from '../../assets/Leds/2_3.gif';
import logo6 from '../../assets/Leds/2_4.gif';
import logo7 from '../../assets/Leds/2_5.gif';
import logo8 from '../../assets/Leds/2_6.gif';
import logo9 from '../../assets/Leds/2_7.gif';
import logo10 from '../../assets/Leds/3_2.gif';
import logo11 from '../../assets/Leds/3_3.gif';

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
				data: [
					<LED title='Placa-mãe com defeito' src={logo} key="1"/>,
					<LED title='Placa-mãe, fonte de alimentação ou cabeamento com defeito' src={logo1} key="2"/>,
					<LED title='Placa-mãe, memória/RAM ou CPU com defeito' src={logo1} key="3"/>,
					<LED title='Bateria de célula tipo moeda com defeito' src={logo2} key="4"/>,
					<LED title='Erro na CPU' src={logo3} key="5"/>,
					<LED title='Motherboard (Placa-mãe): Falha da ROM BIOS' src={logo4} key="6"/>,
					<LED title='Nenhuma memória/RAM detectada' src={logo5} key="7"/>,
					<LED title='Falha de memória/RAM' src={logo6} key="8"/>,
					<LED title='Memória invalida instalada' src={logo7} key="9"/>,
					<LED title='Erro na placa-mãe/chipset' src={logo8} key="10"/>,
					<LED title='Falha do LCD' src={logo9} key="11"/>,
					<LED title='Erro na bateria CMOS' src={logo10} key="12"/>,
					<LED title='Falha em PCI ou placa de vídeo/chip' src={logo11} key="12"/>,
				],
				GIF: true,
				end: true
			},
			c2: {
				title: 'Identificado problema na placa mãe do notebook ou na alimentação interna de energia do equipamento.',
				data: [],
				end: true
			}
		}
	},
	c2: {
		title: 'O notebook está com a fonte de energia na tomada?',
		data: defaultAnswer,
		c1: {
			title: "Teste outro equipamento elétrico na mesma tomada para certificar-se de que está funcionando corretamente. Funcionou?",
			data: defaultAnswer,
			c1: {
				title: 'Troque o cabo de força do computador por outro que tenha o funcionamento garantido. Funcionou?',
				data: defaultAnswer,
				c1: {
					title: 'Problema identificado no cabo de energia do computador.',
					data: [],
					end: true
				},
				c2: {
					title: 'O problema provavelmente encontra-se em sua fonte de energia do computador. Faça a substituição da peça.',
					data: [],
					end: true
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