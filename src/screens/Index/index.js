// @ts-check
import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { root } from '../../utils/Trees'
import Leds from '../../components/Leds'

const handleOnClick = (choice, answer) => {
	if(answer.multi && choice === 2) {
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
						<h1>{answer.title}</h1>
						<div className="buttons">
							{
								answer.data.map((elem, index) => (
									<button onClick={() => setAnswer(handleOnClick(index, answer))}>
										{elem}
									</button>
								))
							}
							{
								answer.end && (
									<div> 
										<button onClick={() => setIsEnd(true)}>Encerrar diagnóstico</button>
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
