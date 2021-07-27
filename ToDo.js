import { DoneAllOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./index.css";
const Todo=()=>{
    const[data,setData]=useState();
     const[actual,setActual]=useState([]);
    
    const del=(ind)=>{
        const d = actual.filter((da,ino)=>{
            return ino !== ind;
        });
        setActual(d);
    }
    const Delall=()=>{
        setActual([]);
    }
    return(
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="" alt=""/>
                        <figcaption>Add Item</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Write" onChange={(e)=>{ setData(e.target.value)}}/>
                        <i className="fa fa-plus add-btn" title="Add" onClick={()=>{

                        if(!data){}
                        else
                        {
                            setActual([...actual,data]);
                            setData();
                        }
                            }
                            }>

                        </i>
                    </div>
                    <div className="showItems">
                    {actual.map((value,ind)=>{
                            return(
                                <div className="eachItem" key={ind}>
                                <h3>{value}<br/></h3>
                                <i className="far fa-trash-alt add-btn" title="Delete Item" 
                                onClick={()=>del(ind)}> Delete it</i>
                                
                                </div>

                            )
                    })}
                        
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove all" onClick={Delall}><span>Delete Eeverything</span></button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Todo