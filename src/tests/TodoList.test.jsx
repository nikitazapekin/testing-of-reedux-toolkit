/*

//ПЕРВЫЙ ВАРИАНТ
import TodoList from "../TodoList";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";
jest.mock("react-redux");



const todos = [
    {id: '123', text: "dv", completed: false},
    {id: '124', text: "с", completed: false}
]
describe('TodoLisy', ()=> {
    it('dc', ()=> {
        useSelector.mockReturnValue([])
        const component = render(<TodoList />)
        expect(component).toMatchSnapshot();
    })


    it('nk', ()=> {
        useSelector.mockReturnValue(todos)
        const component = render(<TodoList />)
        expect(component).toMatchSnapshot();
    })
})
    */




/*
//ВТОРОЙ ВАРИАНТ
import TodoList from "../TodoList";
//import { useSelector } from "react-redux";
import { render } from "@testing-library/react";
import * as reduxHooks from "react-redux"
jest.mock("react-redux");



const todos = [
    {id: '123', text: "dv", completed: false},
    {id: '124', text: "с", completed: false}
]

//const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')
describe('TodoLisy', ()=> {
    it('dc', ()=> {
       // useSelector.mockReturnValue([])
       jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]) //говорим джесту - отслеживай юз селектор
        const component = render(<TodoList />)
        expect(component).toMatchSnapshot();
    })


    it('nk', ()=> {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(todos) 

        //mockResolvedValue возвращает промис
     //   useSelector.mockReturnValue(todos)
        const component = render(<TodoList />)
        expect(component).toMatchSnapshot();
    })
})

*/




//ТРЕТИЙ ВАРИАНТ
import TodoList from "../TodoList";
//import { useSelector } from "react-redux";
import { render } from "@testing-library/react";
import * as reduxHooks from "react-redux"
jest.mock("react-redux");



const todos = [
    {id: '123', text: "dv", completed: false},
    {id: '124', text: "с", completed: false}
]

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')
describe('TodoLisy', ()=> {
    it('dc', ()=> {
       // useSelector.mockReturnValue([])
     mockedUseSelector.mockReturnValue([]) //говорим джесту - отслеживай юз селектор
        const component = render(<TodoList />)
        expect(component).toMatchSnapshot();
    })


    it('nk', ()=> {
     mockedUseSelector.mockReturnValue(todos) 

        //mockResolvedValue возвращает промис
     //   useSelector.mockReturnValue(todos)
        const component = render(<TodoList />)
        expect(component).toMatchSnapshot();
    })
})