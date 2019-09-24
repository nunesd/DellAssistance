import React from 'react';
const defaultAnswer = ['Sim', 'Não'];

export const monitor = {
	title: 'O monitor está mostrando vídeo?',
	data: defaultAnswer,
	c1: {
		title: 'O vídeo está com alguma deformidade, mancha, monocromático ou com riscos?',
		data: defaultAnswer,
		c1: {
			title: 'Ao conectar o cabo de vídeo deste monitor em outro computador que tenha funcionamento garantido, o vídeo ocorre normalmente?',
			data: defaultAnswer,
			c1: {
				title: 'Seu monitor está com problema no display ou mal  contato na porta de conexão nas pontas do cabo de vídeo.',
				data: [],
				end: true,
			},
			c2: {
				title: 'Problema identificado no cabo',
				data: ['substitua o cabeamento de vídeo do monitor.'],
				end: true,
			}
		},
		c2: {
			title: 'O monitor está fazendo algum ruído ou exalando algum tipo de fumaça?',
			data: defaultAnswer,
			c1: {
				title: 'Entre em contato com algum técnico para averiguação do seu monitor.',
				data: [],
				end: true
			},
			c2: {
				title: 'Monitor funcionando normalmente.',
				data:[],
				end: true
			}
		}
	},
	c2: {
		title: 'O monitor está ligado corretamente na tomada?',
		data: defaultAnswer,
		c1: {
			title: 'Teste outro equipamento elétrico na mesma tomada para certificar-se de que está funcionando corretamente. Funcionou?',
			data: defaultAnswer,
			c1: {
				title: 'Troque o cabo de força do monitor por outro que tenha o funcionamento garantido. O led do power ligou?',
				data: defaultAnswer,
				c1: {	
					title: 'O cabo de vídeo do monitor está corretamente conectado no computador e no monitor?',
					data: defaultAnswer,
					c1: {
						title: 'Ao conectar o cabo de vídeo deste monitor em outro computador que tenha funcionamento garantido, o vídeo ocorre normalmente?',
						data: defaultAnswer,
						c1: {
							title: <p>Prováveis problemas:<br />
							* Seu monitor mesmo ligando está com problema no display ou no conector do cabo de vídeo.<br />
							* Seu computador pode estar com problemas.</p>,
							data: [],
							end: true
						}
					},
					c2: {
						title: 'Conecte corretamente o cabo de vídeo nas portas adequadas da máquina e do computador.',
						data: [],
						end: true
					}
				},
				c2: {
					title: 'O problema provavelmente encontra-se no seu monitor. Faça a substituição do equipamento.',
					data: [],
					end: true
				}
			},
			c2: {
				title: 'Identificado problema na tomada de energia utilizada. Conecte o equipamento em outra fonte de energia.',
				data: [],
				end: true,
			}
		},
		c2: {
			title: 'Conecte os cabos de força do monitor em uma tomada adequada, respeitando sua tensão.',
			data: [],
			end: true
		}
	}
}