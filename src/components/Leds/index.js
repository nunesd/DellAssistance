//@ts-check
import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/Leds/1_1.gif';
import logo1 from '../../assests/Leds/1_2.gif';
import logo2 from '../../assests/Leds/1_4.gif';
import logo3 from  '../../assests/Leds/2_1.gif';
import logo4 from '../../assets/Leds/2_2.gif';
import logo5 from '../../assets/Leds/2_3.gif';
import logo6 from '../../assets/Leds/2_4.gif';
import logo7 from '../../assets/Leds/2_5.gif';
import logo8 from '../../assets/Leds/2_6.gif';
import logo9 from '../../assets/Leds/2_7.gif';
import logo10 from '../../assets/Leds/3_1.gif';
import logo11 from '../../assets/Leds/3_2.gif';

const data = [
	{title: 'Placa-mãe com defeito', src: logo},
	{title: 'Placa-mãe, fonte de alimentação ou cabeamento com defeito', src: logo1},
	{title: 'Placa-mãe, memória/RAM ou CPU com defeito', src: null},
	{title: 'Bateria de célula tipo moeda com defeito', src: logo2},
	{title: 'Erro na CPU', src: logo3},
	{title: 'Motherboard (Placa-mãe): Falha da ROM BIOS', src: logo4},
	{title: 'Nenhuma memória/RAM detectada', src: logo5},
	{title: 'Falha de memória/RAM', src: logo6},
	{title: 'Memória invalida instalada', src: logo7},
	{title: 'Erro na placa-mãe/chipset', src: logo8},
	{title: 'Falha do LCD', src: logo9},
	{title: 'Erro na bateria CMOS', src: logo10},
	{title: 'CC', src: logo11},
]

const Leds = props => {
	return (
		<div className="cards-wrapper">
			{
				data.map(({title, src}) => (
					<div className="card" key={title}>
						<img src={src} />
						<p>{title}</p>
					</div>
				))
			}
		</div>
	)
}

Leds.propTypes = {

}

export default Leds
