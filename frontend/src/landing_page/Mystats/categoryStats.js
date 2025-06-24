import React from 'react';

function categoryStats() {
    return ( 
        <div style={{
            width: "63%",
            marginLeft:"20%",
            marginTop:"1%",
            marginBottom:"1%",
          
          }}><b>Detailed Category Stats</b>
             <p style={{opacity:"0.5"}}>Breakdown of performance by category</p>
             
             <div style={{width: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            
            height:"50%",
            marginBottom:"1%", }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Attempts</th>
            <th style={thStyle}>Completed</th>
            <th style={thStyle}>Average Score</th>
            <th style={thStyle}>Last Attempt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Computer Science</td>
            <td style={tdStyle}>40</td>
            <td style={tdStyle}>6</td>
            <td style={tdStyle}>2.33</td>
            <td style={tdStyle}>21 December</td>
          </tr>
          <tr>
            <td style={tdStyle}>subject name api</td>
            <td style={tdStyle}>attempt api</td>
            <td style={tdStyle}>complete api</td>
            <td style={tdStyle}>average api</td>
            <td style={tdStyle}>date api</td>
            
          </tr>
        </tbody>
      </table>
    </div>
        </div>
     );
}

const thStyle = {
  borderBottom:"solid 2px #f4f4f4",
  padding: '12px',
  backgroundColor: '#f4f4f4',
  textAlign: 'left',
  
};

const tdStyle = {
  borderBottom:"solid 2px #f4f4f4",
  padding: '12px',
  
};

export default categoryStats;