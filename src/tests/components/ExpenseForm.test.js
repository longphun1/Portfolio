import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/expenseForm';
import expenses from '../fixtures/expenses';

test('should render expenseform correctly', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render expenseform correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
});

test('should set description on input change', ()=> {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on input change', ()=> {
    const value = 'New note'
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', ()=> {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', ()=> {
    const value = '12.222'
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

