import react, { useState, useEffect, useRef } from "react";
import "./BreadcrumbsNav.css";
import data from "./data.json";



const BreadcrumbsNavbar = ({ filter, setFilter }: { filter: any; setFilter: any }) => {

    const [data1, setdata1] = useState([data]);
    const [Navcasestatus, setNavcasestatus] = useState("");
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(-1);


    useEffect(() => {
        let arr: any = [];
        if (Navcasestatus.length > 1) {
            const a = data.map((casestatus: any) => {
                if (casestatus.caseStatus === Navcasestatus) {
                    arr.push({
                        "caseStatus": casestatus.caseStatus,
                        "caseCount": casestatus.caseCount,
                        "caseAmount": casestatus.caseAmount
                    })
                }
                else {
                    arr.push({
                        "caseStatus": casestatus.caseStatus,
                        "caseCount": 0,
                        "caseAmount": 0
                    })
                }

            });
            setdata1([arr]);
        }
        else{
            setdata1([data]);
        }

    }, [Navcasestatus]);

    

    const renderList = data1[0].map((casestatus: any,i:any) => {
        function handleFilter(e:any,i:any) {
            if(toggle===false){
                setActive(i);
                setToggle(true);
                setFilter("caseStatus",casestatus.caseStatus);
                setNavcasestatus(casestatus.caseStatus);
               // e.currentTarget.classList.toggle('focus');
            }
            else{
                setActive(-1);
                setToggle(false);
                setFilter("caseStatus","");
                setNavcasestatus("");
            }
        }

        const { caseStatus, caseCount, caseAmount } = casestatus;
        if (caseStatus !== "TOTAL")
            return (
                <a href={`#${caseStatus}`} key={caseStatus} className={active == i ? 'breadcrumbs__item focus' :'breadcrumbs__item'} onClick={(e) => handleFilter(e,i)}>
                    <h2>{caseCount}</h2>
                    <h4>{caseStatus}</h4>
                    <p>{`$${caseAmount}`}</p>
                </a>
            );

    })

    const renderTotal = data.map((casestatus: any) => {
        const { caseStatus, caseCount, caseAmount } = casestatus;
        const TotalAmount = data1[0].filter(casestatus => casestatus.caseStatus !== "TOTAL").reduce((totalAmount, casestatus) => totalAmount + parseInt(casestatus.caseAmount, 10), 0);

        //const a= data.reduce((totalAmount:number, data:any) => totalAmount + data.caseAmount, 0);
        const TotalCase = data1[0].filter(casestatus => casestatus.caseStatus !== "TOTAL").reduce((TotalCase, casestatus) => TotalCase + casestatus.caseCount, 0);
        if (caseStatus === "TOTAL")
            return (
                <a className="breadcrumbs__item is-active">
                    <h2>{TotalCase}</h2>
                    <h4>{caseStatus}</h4>
                    <p>{`$${TotalAmount}`}</p>
                </a>
            );
    })

    return (

        <nav className="breadcrumbs">
            {renderList}
            {renderTotal}
        </nav>
    )
};

export default BreadcrumbsNavbar;