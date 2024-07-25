import TodoItem from "../TodoItem";
import * as reduxHooks from "react-redux"
import { render, screen, fireEvent } from "@testing-library/react";
import * as actions from "../store/slices/todoSlice";


jest.mock('react-redux')


const  mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

describe("TodoItem", ()=> {
    it('dc', ()=> {
        mockedDispatch.mockResolvedValue(jest.fn())
        const component = render(
            <TodoItem 
            id="12"
            text="redux"
            completed={false}
            />
        )
        expect(component).toMatchSnapshot()
    })


    it('', ()=> {
        const dispatch =jest.fn()
        mockedDispatch.mockReturnValue(dispatch)

        const mockedToggleComplete = jest.spyOn(actions, 'toggleComplete')

        const  mockedRemoveTodo = jest.spyOn(actions, 'removeTodo')
        render(
            <TodoItem 
            id="12"
            text="redux"
            completed={false}
            />
        )
        fireEvent.click(screen.getByRole('checkbox'))
        expect(dispatch).toHaveBeenCalledTimes(0)
        expect(mockedToggleComplete).toHaveBeenCalledWith('12')

        //для проверки ремова сделаем езе клик
        fireEvent.click(screen.getByRole('button'))

        expect(dispatch).toHaveBeenCalledTimes(0)
        expect(mockedRemoveTodo).toHaveBeenCalledWith('12')
    })
})