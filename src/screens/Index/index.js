// @ts-check
import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { root } from '../../utils/Trees'

const ledsData = [
	{title: 'Placa-mãe com defeito'},
	{title: 'Placa-mãe, fonte de alimentação ou cabeamento com defeito'},
	{title: 'Placa-mãe, memória/RAM ou CPU com defeito'},
	{title: 'Bateria de célula tipo moeda com defeito'},
	{title: 'Erro na CPU'},
	{title: 'Motherboard (Placa-mãe): Falha da ROM BIOS'},
	{title: 'Nenhuma memória/RAM detectada'},
	{title: 'Falha de memória/RAM'},
	{title: 'Memória invalida instalada'},
	{title: 'Erro na placa-mãe/chipset'},
	{title: 'Falha do LCD'},
	{title: 'Erro na bateria CMOS'},
	{title: 'Falha em PCI ou placa de vídeo/chip'},
]
const handleOnClick = (choice, answer) => {
	if(answer.GIF) {
		return {
			title: ledsData[choice].title,
			data: [],
			end: true
		}
	} else if(answer.multi && choice === 2) {
		return answer.c3
	} else if (choice === 1) {
		return answer.c2
	}

	return answer.c1
}

const Index = props => {
	const [answer, setAnswer] = useState(root)
	const [isEnd, setIsEnd] = useState(false)
	const [finish, setFinish] = useState(false)

	return (
		<div className="container">
			{
				finish ? (
					<h1>Obrigado por usar nosso sistema!</h1>
				) : isEnd ? (
					<div>
						<h1>Deseja iniciar um novo diagnóstico?</h1>
						<button onClick={() => {
							setIsEnd(false)
							setFinish(false)
						}}>Sim</button>
						<button onClick={() => setFinish(true)}>Não</button>
					</div>
				) : (
					<Fragment>
						<h1 style={{color: answer.end && !answer.GIF ? '#45a577' : '#333'}}>{answer.title}</h1>
						<div className="buttons">
							{
								answer.data.map((elem, index) => (
									<button onClick={() => setAnswer(handleOnClick(index, answer))} key={index} style={{margin: '5px', padding: '5px', background: '#ccc', borderRadius: '3px', outline: 'none'}}>
										{elem}
									</button>
								))
							}
							{
								answer.end &&	!answer.GIF && (
									<div> 
										<button onClick={() => setIsEnd(true)} style={{margin: '5px', padding: '5px', background: '#ccc', borderRadius: '3px', outline: 'none'}}>Encerrar diagnóstico</button>
									</div>
								)
							}
						</div>
					</Fragment>
				)
			}
		</div>
	)
};

Index.propTypes = {

};

export default Index
