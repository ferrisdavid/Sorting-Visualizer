import React, { Component } from 'react';
import './sortingVisualizer.css';
import {getBubbleSortAnimations} from '../sortingAlgorithms/BubbleSort';
import Navbar from 'react-bootstrap/Navbar';
import './toolbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getQuickSortAnimations} from '../sortingAlgorithms/QuickSort';
import {getMergeSortAnimations} from '../sortingAlgorithms/MergeSort';
import {getInsertionSortAnimations} from '../sortingAlgorithms/InsertionSort';

class SortingVisualizer extends Component {
    state = { array: [],
              size: 50,
              barWidth: window.innerHeight*window.innerWidth/(50*2000)   
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
        this.setState({size: document.getElementById("sizeSlider").value });
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
                },i*3);
            }
            else{
                const[barOneId, height] = animations[i];
                const barOneStyle = ArrayBars[barOneId].style;
                setTimeout(()=>{
                    barOneStyle.height = `${height}px`;
                },i*3);
            } 
        }
    }


    // testBubbleSort = () =>{
    //    const javaSorted = this.state.array.slice(0);
    //    const mySorted = getBubbleSortAnimations(this.state.array);
    //    javaSorted.sort((a,b)=>a-b);
    //    console.log(this.arraysAreEqual(mySorted,javaSorted));
    //    this.generateArray();
    // }


    quickSort = () =>{
        const animations = getQuickSortAnimations(this.state.array);
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
                },i*3);
            }
            else if(typeof animations[i][1]==="string"){
                const color = animations[i][1];
                const pivotBarId = animations[i][0];
                const pivotBarStyle = ArrayBars[pivotBarId].style;
                setTimeout(()=>{
                    pivotBarStyle.backgroundColor = color;
                }, i*3);
            }
            else{
                const[barOneId, height] = animations[i];
                const barOneStyle = ArrayBars[barOneId].style;
                setTimeout(()=>{
                    barOneStyle.height = `${height}px`;
                },i*3);
            }
        }

    }

    mergeSort=()=>{
        const animations = getMergeSortAnimations(this.state.array);
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
                },i*3);
            }
            else{
                const[barOneId, height] = animations[i];
                const barOneStyle = ArrayBars[barOneId].style;
                setTimeout(()=>{
                    barOneStyle.height = `${height}px`;
                },i*3);
            }
        }
    }

    InsertionSort=()=>{
        const animations = getInsertionSortAnimations(this.state.array);
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
                },i*3);
            }
            else if(typeof animations[i][1] === "string"){
                const color = animations[i][1];
                const barOneId = animations[i][0];
                const barOneStyle = ArrayBars[barOneId].style;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                },i*3);
            } 
            else{
                const[barOneId, height] = animations[i];
                const barOneStyle = ArrayBars[barOneId].style;
                setTimeout(()=>{
                    barOneStyle.height = `${height}px`;
                },i*3);
            } 
        }
    } 
    // test = ()=>{
    //     const bars = document.getElementsByClassName("bar");
    //     let barVals =[];
    //     for(let i =0; i < this.state.array.length; i++){
    //         barVals.push(bars[i].style.height);
    //     }
    //     for(let j =0; j < this.state.array.length;j++){
    //         let string = this.state.array[j] + "px";
    //         if(string !== barVals[j]) return false
    //     }
    //     console.log(barVals,this.state.array);
    //     return true;
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
        <Navbar className="toolbar" variant = "dark" expand = "lg">
        <span className = "title">Sorting Visualizer</span>
        <div className = "buttons">
            <button onClick = {this.generateArray}>Generate Array</button>
            <button onClick = {this.bubbleSort}>Bubble Sort</button>
            <button onClick = {this.mergeSort}>Merge Sort</button>
            <button onClick = {this.quickSort}>Quick Sort</button>
            <button onClick= {this.InsertionSort}>Insertion Sort</button>
        </div>
        <span>Change Array Size</span>
        <input id ="sizeSlider" type = "range" min = {5} max={150} defaultValue = {50} onChange = {this.handleIncrease} onClick = {this.handleIncrease}></input>
        </Navbar>
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