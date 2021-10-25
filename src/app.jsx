import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import React, { Component } from "react";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    totalCount: 0,
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id == habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id == habit.id) {
        return { ...habit, count: item.count - 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id != habit.id);
    this.setState({ habits });
  };

  handleAddForm = (input) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: input, count: 0 },
    ];

    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count != 0) {
        return { ...habit, count: 0 };
      } else {
        return habit;
      }
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.reduce(function (acc, curr) {
            return acc + curr.count;
          }, 0)}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          handleAddForm={this.handleAddForm}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
