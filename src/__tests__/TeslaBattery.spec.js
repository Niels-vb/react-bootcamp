import React from "react";
import { render } from '@testing-library/react'
import { TeslaBattery } from '../tesla-battery/TeslaBattery'

describe('Tesla Battery Component', () => {
    it('Render the TeslaBattery component', () => {
        const { container } = render(<TeslaBattery />)
        expect(container.getElementsByClassName('tesla-battery').length).toBe(1)
    })

    describe('Speed component', () => {
        it.todo('Increment the speed')
        it.todo('Decrement the speed')
    })

    describe('Temperature component', () => {
        it.todo('Increment the temperature')
        it.todo('Decrement the temperature')
    })

    describe('Wheels component', () => { })

    describe('Focus on components', () => { })

    describe('Climate components', () => { })

})