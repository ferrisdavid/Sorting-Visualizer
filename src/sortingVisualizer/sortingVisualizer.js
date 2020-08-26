import React, { Component } from 'react';
import './sortingVisualizer.css';
import {getBubbleSortAnimations} from '../sortingAlgorithms/BubbleSort';
import './toolbar.css';
import {getQuickSortAnimations} from '../sortingAlgorithms/QuickSort';
import {getMergeSortAnimations} from '../sortingAlgorithms/MergeSort';
import {getInsertionSortAnimations} from '../sortingAlgorithms/InsertionSort';

class SortingVisualizer extends Component {
    state = { array: [],
              size: 50,
              barWidth: window.innerHeight*window.innerWidth/(50*2000),
              AnimationSpeed: 3,  
            }
    
    componentDidMount(){
        this.generateArray();
    }

     generateArray = () =>{
        let array = [];
        let size = this.state.size;
        for(let i = 0; i <size; i++){
            let randomVal = this.getRandomVal();
            array.push(randomVal);

        }
        this.setState({ array });
    }

    handleIncrease = () =>{
        let newSize = document.getElementById("sizeSlider").value;
        if(newSize > 80){
            this.setState({ AnimationSpeed: 1.25 });
        }
        else if(newSize > 40){
            this.setState({ AnimationSpeed: 4 });
        }
        else{
            this.setState({ AnimationSpeed: 10 });
        }
        this.setState({size: newSize });
        let difference = this.state.size - this.state.array.length;
        let auxillaryArray = this.state.array.slice();
        if(difference > 0){
            for(let i = 0; i < difference; i++){
                auxillaryArray.push(this.getRandomVal());
            }
            this.setState({ array: auxillaryArray});
        }
        else if(difference < 0){
            let newarr =auxillaryArray.slice(0,auxillaryArray.length + difference-1);
            this.setState({ array: newarr});
        }
        this.setState({ barWidth: window.innerHeight*window.innerWidth/(this.state.size*2000)})
    }

    bubbleSort = () => {
        const animations = getBubbleSortAnimations(this.state.array);
        const {AnimationSpeed} = this.state;
        this.handleDisable();
        for(let i =0; i < animations.length; i++){
            const ArrayBars = document.getElementsByClassName("bar");
            if(animations[i].length === 3){
                const color = animations[i][2];
                const barOneId = animations[i][0];
                const barTwoId = animations[i][1];
                const barOneStyle = ArrayBars[barOneId].style;
                const barTwoStyle = ArrayBars[barTwoId].style; 
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*AnimationSpeed);
            }
            else{
                const[barOneId, height] = animations[i];
                const barOneStyle = ArrayBars[barOneId].style;
                setTimeout(()=>{
                    barOneStyle.height = `${height}px`;
                },i*AnimationSpeed);
            } 
        }
    }



    quickSort = () =>{
        const animations = getQuickSortAnimations(this.state.array);
        const {AnimationSpeed} = this.state;
        for(let i  = 0; i < animations.length; i++){
            const ArrayBars = document.getElementsByClassName("bar");
            if(animations[i].length === 3){
                const color = animations[i][2];
                const barOneId = animations[i][0];
                const barTwoId = animations[i][1];
                const barOneStyle = ArrayBars[barOneId].style;
                const barTwoStyle = ArrayBars[barTwoId].style; 
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*AnimationSpeed);
            }
            else if(typeof animations[i][1]==="string"){
                const color = animations[i][1];
                const pivotBarId = animations[i][0];
                const pivotBarStyle = ArrayBars[pivotBarId].style;
                setTimeout(()=>{
                    pivotBarStyle.backgroundColor = color;
                }, i*AnimationSpeed);
            }
            else{
                const[barOneId, height] = animations[i];
                const barOneStyle = ArrayBars[barOneId].style;
                setTimeout(()=>{
                    barOneStyle.height = `${height}px`;
                },i*AnimationSpeed);
            }
        }
    }

    mergeSort=()=>{
        const animations = getMergeSortAnimations(this.state.array);
        const {AnimationSpeed} = this.state;
        for(let i = 0; i < animations.length; i++){
            const ArrayBars = document.getElementsByClassName("bar");
            if(animations[i].length === 3){
                const color = animations[i][2];
                const barOneId = animations[i][0];
                const barTwoId = animations[i][1];
                const barOneStyle = ArrayBars[barOneId].style;
                const barTwoStyle = ArrayBars[barTwoId].style; 
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*AnimationSpeed);
            }
            else{
                const[barOneId, height] = animations[i];
                const barOneStyle = ArrayBars[barOneId].style;
                setTimeout(()=>{
                    barOneStyle.height = `${height}px`;
                },i*AnimationSpeed);
            }
        }
    }

    InsertionSort=()=>{
        const animations = getInsertionSortAnimations(this.state.array);
        const {AnimationSpeed} = this.state;
        for(let i =0; i < animations.length; i++){
            const ArrayBars = document.getElementsByClassName("bar");
            if(animations[i].length === 3){
                const color = animations[i][2];
                const barOneId = animations[i][0];
                const barTwoId = animations[i][1];
                const barOneStyle = ArrayBars[barOneId].style;
                const barTwoStyle = ArrayBars[barTwoId].style; 
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*AnimationSpeed);
            }
            else if(typeof animations[i][1] === "string"){
                const color = animations[i][1];
                const barOneId = animations[i][0];
                const barOneStyle = ArrayBars[barOneId].style;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                },i*AnimationSpeed);
            } 
            else{
                const[barOneId, height] = animations[i];
                const barOneStyle = ArrayBars[barOneId].style;
                setTimeout(()=>{
                    barOneStyle.height = `${height}px`;
                },i*AnimationSpeed);
            } 
        }
    } 

    // Disable buttons after sort click and re-enable the buttons after animation complete (in progress)
    // handleDisable(){
    //     let buttons = document.getElementsByClassName("buttons");
    //     while(buttons.length > 0){
    //         buttons[0].className = "DisabledButton";
    //     }
    // }
    // handleEnable(){
    //     let buttons = document.getElementsByClassName("DisabledButton");
    //     while(buttons.length > 0){
    //         buttons[0].className = "buttons";
    //     }
    // }

    arraysAreEqual(a1,a2){
        if(a1.length !== a2.length) return false;
        for(let i = 0;i < a1.length; i++){
            if(a1[i] !== a2[i]) return false;
        }
        return true;
    }

    getRandomVal(){
        return Math.floor(Math.random()*(700-50)) + 50;
    }
    
    render() {
        const { array } = this.state;
        const { barWidth } = this.state;
        return (
       <div>     
        <div className="toolbar" variant = "dark" expand = "lg">
        <span className = "title">Sorting Visualizer</span>
        <span className = "SliderText">Change Array Size</span>
            <input  className = "Slider" id ="sizeSlider" type = "range"  min = {5} max={150} defaultValue = {50} onChange = {this.handleIncrease} onClick = {this.handleIncrease}></input>
            <button className =  "buttons" onClick = {this.generateArray}>Generate Array</button>
            <button className =  "buttons" onClick = {this.bubbleSort}>Bubble Sort</button>
            <button className =  "buttons" onClick = {this.mergeSort}>Merge Sort</button>
            <button className =  "buttons" onClick = {this.quickSort}>Quick Sort</button>
            <button className =  "buttons" onClick= {this.InsertionSort}>Insertion Sort</button>   
        </div>
            <div className = "array-container">
              {array.map((value,id)=>(
              <div 
              className = "bar"
              key = {id}
              style = {{height: `${value}px`, width: `${barWidth}px`}}
              >
              </div>))}
            </div>
        </div>    
        );
    }
}
 
export default SortingVisualizer;