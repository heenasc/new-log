/*import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import { view,fetch,requestJira } from '@forge/bridge';
import api, { route } from "@forge/api";
import React, { useState, useEffect } from 'react';


function Edit() {
  //const onSubmit = (formData) => view.submit(formData);
   const onSubmit = (formData) => {
    // Include the field data in the context object
    view.submit({ ...formData, context: { project, role, startDate, endDate, selectedDateUnit } });
  };

  const [project, setProject] = useState("");
  const [formData, setFormData] = useState({});
  const [projects, setProjects] = useState([]);
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateUnit, setDateUnit] = useState([]);
  const [selectedDateUnit, setSelectedDateUnit] = useState(null);
 const [selectedProjectKey, setSelectedProjectKey] = useState(null); // Initialize to null
  useEffect(() => {
  async function fetchProjects() {
    try {
      console.log("entered fetchProjects new");
      const response = await requestJira(`/rest/api/3/project/search`, {
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log("fetchProjects");
      const responseJson = await response.json();
      //const projectNames = responseJson.values.map((project) => project.name);
      const projectNames = responseJson.values.map((project) => ({
        key: project.key,
        name: project.name
      }));
      console.log("Project Names:", projectNames);

      setProjects(projectNames);
      console.log("responseJson.values",responseJson.values);
      console.log("exit fetchProjects");
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  fetchProjects(); // Call the function here
}, []);


 
 //this below function is working fine   
 async function fetchRoles(selectedProjectKey) {
  if (selectedProjectKey !== null) {
        try {
          const response = await requestJira(`/rest/api/3/project/${selectedProjectKey}/role`, {
            headers: {
              'content-type': 'application/json',
            },
          });
          const responseJson = await response.json();
          console.log("responseJson roles", responseJson);

          // Initialize an array to store role objects
          const roles = [];

          // Add the "All" option to the roles array
          roles.push({ id: 'All', name: 'All' });

          // Iterate through the key-value pairs in the responseJson
          for (const roleName in responseJson) {
            if (responseJson.hasOwnProperty(roleName)) {
              const roleUrl = responseJson[roleName];
              console.log("roleUrl", roleUrl);
              const roleId = roleUrl.split('/').pop(); // Extract the role ID from the URL
              roles.push({
                id: roleId,
                name: roleName,
              });
            }
          }

          console.log("Roles:", roles);
    // Now you can set the roles in your component state
    // For example, assuming you have a setRoles function:
     setRoles(roles);

  } catch (error) {
    console.error('Error fetching roles for the selected project:', error);
  }
  
  }
  
}
    	
   useEffect(() => {
    
    const simulatedTimeUnit = [
      { id: 1, name: 'Last Week' },
      { id: 2, name: 'Last Month' },
      { id: 3, name: 'Last 3 Months' },
      { id: 4, name: 'Custom' },
    ];
    console.log('simulatedTimeUnit:', simulatedTimeUnit);
    setDateUnit(simulatedTimeUnit);
  }, []); // Run this effect only once on component mount

  
  const handleProjectChange = (e) => {
    const selectedProjectKey = e.target.value;
    setProject(selectedProjectKey);
    setSelectedProjectKey(selectedProjectKey); // Set the selectedProjectKey when a project is selected

    // Check if a project is selected before calling fetchRoles
    if (selectedProjectKey) {
      fetchRoles(selectedProjectKey);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDateUnitChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDateUnit(selectedValue);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };


  return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <div>
        <label>
          Select Project:
          <select value={project} onChange={handleProjectChange} isMulti>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
            ))}
  	 </select>
        </label>
      </div>

      <div>
        <label>
          Select Role:
          <select value={role} onChange={handleRoleChange}>
            <option value="">Select a role</option>
            {roles.map((r) => (
        	<option key={r.id} value={r.id}>
          	{r.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Select DateUnit:
          <select value={selectedDateUnit} onChange={handleDateUnitChange}>
            <option value="">Select a DateUnit</option>
            {dateUnit.map((du) => (
              <option key={du.id} value={du.name}>
                {du.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </label>
        </div>
      )}

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </label>
        </div>
      )}
          <br/>
          <ButtonGroup>
            <Button type="submit" isDisabled={submitting}>Save</Button>
            <Button appearance="subtle" onClick={view.close}>Cancel</Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}

export default Edit;
*/

/*import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import { view,fetch,requestJira } from '@forge/bridge';
import api, { route } from "@forge/api";
import React, { useState, useEffect } from 'react';


function Edit() {
  //const onSubmit = (formData) => view.submit(formData);
   const onSubmit = (formData) => {
    // Include the field data in the context object
    view.submit({ ...formData, context: { project, role, startDate, endDate, selectedDateUnit } });
  };

  const [project, setProject] = useState("");
  const [formData, setFormData] = useState({});
  const [projects, setProjects] = useState([]);
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateUnit, setDateUnit] = useState([]);
  const [selectedDateUnit, setSelectedDateUnit] = useState(null);
 const [selectedProjectKey, setSelectedProjectKey] = useState(null); // Initialize to null
 const [refreshInterval, setRefreshInterval] = useState(null);
  useEffect(() => {
  async function fetchProjects() {
    try {
      console.log("entered fetchProjects new");
      const response = await requestJira(`/rest/api/3/project/search`, {
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log("fetchProjects");
      const responseJson = await response.json();
      //const projectNames = responseJson.values.map((project) => project.name);
      const projectNames = responseJson.values.map((project) => ({
        key: project.key,
        name: project.name
      }));
      console.log("Project Names:", projectNames);

      setProjects(projectNames);
      console.log("responseJson.values",responseJson.values);
      console.log("exit fetchProjects");
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  fetchProjects(); // Call the function here
}, []);


 
 //this below function is working fine   
 async function fetchRoles(selectedProjectKey) {
  if (selectedProjectKey !== null) {
        try {
          const response = await requestJira(`/rest/api/3/project/${selectedProjectKey}/role`, {
            headers: {
              'content-type': 'application/json',
            },
          });
          const responseJson = await response.json();
          console.log("responseJson roles", responseJson);

          // Initialize an array to store role objects
          const roles = [];

          // Add the "All" option to the roles array
          roles.push({ id: 'All', name: 'All' });

          // Iterate through the key-value pairs in the responseJson
          for (const roleName in responseJson) {
            if (responseJson.hasOwnProperty(roleName)) {
              const roleUrl = responseJson[roleName];
              console.log("roleUrl", roleUrl);
              const roleId = roleUrl.split('/').pop(); // Extract the role ID from the URL
              roles.push({
                id: roleId,
                name: roleName,
              });
            }
          }

          console.log("Roles:", roles);
    // Now you can set the roles in your component state
    // For example, assuming you have a setRoles function:
     setRoles(roles);

  } catch (error) {
    console.error('Error fetching roles for the selected project:', error);
  }
  
  }
  
}
    	
   useEffect(() => {
    
    const simulatedTimeUnit = [
      { id: 1, name: 'Last Week' },
      { id: 2, name: 'Last Month' },
      { id: 3, name: 'Last 3 Months' },
      { id: 4, name: 'Custom' },
    ];
    console.log('simulatedTimeUnit:', simulatedTimeUnit);
    setDateUnit(simulatedTimeUnit);
  }, []); // Run this effect only once on component mount

  
  
// Function to handle refresh interval change
  const handleRefreshIntervalChange = (event) => {
    const newInterval = event.target.value;
    setRefreshInterval(newInterval);
  };
  

  // Helper function to convert refreshInterval to milliseconds
  const getMillisecondsForInterval = (interval) => {
    switch (interval) {
      case '15min':
        return 15 * 60 * 1000;
      case '30min':
        return 30 * 60 * 1000;
      case '1hour':
        return 60 * 60 * 1000;
      case '3hours':
        return 3 * 60 * 60 * 1000;
      default:
        return null; // For 'Never' or invalid values
    }
  };  


  
  const handleProjectChange = (e) => {
    const selectedProjectKey = e.target.value;
    setProject(selectedProjectKey);
    setSelectedProjectKey(selectedProjectKey); // Set the selectedProjectKey when a project is selected

    // Check if a project is selected before calling fetchRoles
    if (selectedProjectKey) {
      fetchRoles(selectedProjectKey);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDateUnitChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDateUnit(selectedValue);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };


  return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <div>
        <label>
          Select Project:
          <select value={project} onChange={handleProjectChange} isMulti>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
            ))}
  	 </select>
        </label>
      </div>

      <div>
        <label>
          Select Role:
          <select value={role} onChange={handleRoleChange}>
            <option value="">Select a role</option>
            {roles.map((r) => (
        	<option key={r.id} value={r.id}>
          	{r.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Select DateUnit:
          <select value={selectedDateUnit} onChange={handleDateUnitChange}>
            <option value="">Select a DateUnit</option>
            {dateUnit.map((du) => (
              <option key={du.id} value={du.name}>
                {du.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </label>
        </div>
      )}

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </label>
        </div>
      )}
      
      <div>
        <label htmlFor="refreshInterval">Refresh Interval: </label>
        <select id="refreshInterval" onChange={handleRefreshIntervalChange} value={refreshInterval}>
          <option value="">Never</option>
          <option value="15min">Every 15 minutes</option>
          <option value="30min">Every 30 minutes</option>
          <option value="1hour">Every 1 hour</option>
          <option value="3hours">Every 3 hours</option>
        </select>
      </div>
          <br/>
          <ButtonGroup>
            <Button type="submit" isDisabled={submitting}>Save</Button>
            <Button appearance="subtle" onClick={view.close}>Cancel</Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}

export default Edit;*/

/*import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import { view,fetch,requestJira } from '@forge/bridge';
import api, { route } from "@forge/api";
import React, { useState, useEffect } from 'react';


function Edit() {
  //const onSubmit = (formData) => view.submit(formData);
   const onSubmit = (formData) => {
    // Include the field data in the context object
    view.submit({ ...formData, context: { project, role, startDate, endDate, selectedDateUnit , selectedRefreshInterval } });
  };

  const [project, setProject] = useState("");
  const [formData, setFormData] = useState({});
  const [projects, setProjects] = useState([]);
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateUnit, setDateUnit] = useState([]);
  const [selectedDateUnit, setSelectedDateUnit] = useState(null);
 const [selectedProjectKey, setSelectedProjectKey] = useState(null); // Initialize to null
 const [refreshInterval, setRefreshInterval] = useState([]);
 const [selectedRefreshInterval, setSelectedRefreshInterval] = useState(null);
  useEffect(() => {
  async function fetchProjects() {
    try {
      console.log("entered fetchProjects new");
      const response = await requestJira(`/rest/api/3/project/search`, {
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log("fetchProjects");
      const responseJson = await response.json();
      //const projectNames = responseJson.values.map((project) => project.name);
      const projectNames = responseJson.values.map((project) => ({
        key: project.key,
        name: project.name
      }));
      console.log("Project Names:", projectNames);

      setProjects(projectNames);
      console.log("responseJson.values",responseJson.values);
      console.log("exit fetchProjects");
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  fetchProjects(); // Call the function here
}, []);


 
 //this below function is working fine   
 async function fetchRoles(selectedProjectKey) {
  if (selectedProjectKey !== null) {
        try {
          const response = await requestJira(`/rest/api/3/project/${selectedProjectKey}/role`, {
            headers: {
              'content-type': 'application/json',
            },
          });
          const responseJson = await response.json();
          console.log("responseJson roles", responseJson);

          // Initialize an array to store role objects
          const roles = [];

          // Add the "All" option to the roles array
          roles.push({ id: 'All', name: 'All' });

          // Iterate through the key-value pairs in the responseJson
          for (const roleName in responseJson) {
            if (responseJson.hasOwnProperty(roleName)) {
              const roleUrl = responseJson[roleName];
              console.log("roleUrl", roleUrl);
              const roleId = roleUrl.split('/').pop(); // Extract the role ID from the URL
              roles.push({
                id: roleId,
                name: roleName,
              });
            }
          }

          console.log("Roles:", roles);
    // Now you can set the roles in your component state
    // For example, assuming you have a setRoles function:
     setRoles(roles);

  } catch (error) {
    console.error('Error fetching roles for the selected project:', error);
  }
  
  }
  
}
    	
   useEffect(() => {
    
    const simulatedTimeUnit = [
      { id: 1, name: 'Last Week' },
      { id: 2, name: 'Last Month' },
      { id: 3, name: 'Last 3 Months' },
      { id: 4, name: 'Custom' },
    ];
    console.log('simulatedTimeUnit:', simulatedTimeUnit);
    setDateUnit(simulatedTimeUnit);
  }, []); // Run this effect only once on component mount

  useEffect(() => {
    
    const refresh = [
      { id: 1, name: 'Never' },
      { id: 2, name: 'Every 15 minutes' },
      { id: 3, name: 'Every 30 minutes' },
      { id: 4, name: 'Every 1 hour' },
      { id: 5, name: 'Every 3 hour' },
    ];
    console.log('refresh:', refresh);
    setRefreshInterval(refresh);
  }, []); // Run this effect only once on component mount

  


  
  const handleProjectChange = (e) => {
    const selectedProjectKey = e.target.value;
    setProject(selectedProjectKey);
    setSelectedProjectKey(selectedProjectKey); // Set the selectedProjectKey when a project is selected

    // Check if a project is selected before calling fetchRoles
    if (selectedProjectKey) {
      fetchRoles(selectedProjectKey);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDateUnitChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDateUnit(selectedValue);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleRefreshChange = (e) => {
    const selectedRefresh = e.target.value;
    setSelectedRefreshInterval(selectedRefresh);
  };


  return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <div>
        <label>
          Select Project:
          <select value={project} onChange={handleProjectChange} isMulti>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
            ))}
  	 </select>
        </label>
      </div>

      <div>
        <label>
          Select Role:
          <select value={role} onChange={handleRoleChange}>
            <option value="">Select a role</option>
            {roles.map((r) => (
        	<option key={r.id} value={r.id}>
          	{r.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Select DateUnit:
          <select value={selectedDateUnit} onChange={handleDateUnitChange}>
            <option value="">Select a DateUnit</option>
            {dateUnit.map((du) => (
              <option key={du.id} value={du.name}>
                {du.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </label>
        </div>
      )}

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </label>
        </div>
      )}
      
      <div>
        <label>
          Select Refresh Interval:
          <select value={selectedRefreshInterval} onChange={handleRefreshChange}>
            <option value="">Refresh Interval</option>
            {refreshInterval.map((du1) => (
              <option key={du1.id} value={du1.name}>
                {du1.name}
              </option>
            ))}
          </select>
        </label>
      </div>
          <br/>
          <ButtonGroup>
            <Button type="submit" isDisabled={submitting}>Save</Button>
            <Button appearance="subtle" onClick={view.close}>Cancel</Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}

export default Edit;
*/

/*
return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <div>
        <label>
          Select Project:
          <select inputId="multi-select-example"
      className="multi-select"
      classNamePrefix="react-select"
      options={project}
      isMulti
      isSearchable={false} onChange={handleProjectChange}>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
            ))}
  	 </select>
        </label>
      </div>
      
       <div>
        <label>
          Select Project:
          <select inputId="multi-select-example"
          className="multi-select"
          classNamePrefix="react-select"
  
          ismulti="true"
            onChange={handleProjectChange}>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
                
            ))}
            
  	 </select>
        </label>
      </div>
*/


import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import { view,fetch,requestJira } from '@forge/bridge';
import api, { route } from "@forge/api";
import React, { useState, useEffect } from 'react';


function Edit() {
  //const onSubmit = (formData) => view.submit(formData);
   const onSubmit = (formData) => {
    // Include the field data in the context object
    view.submit({ ...formData, context: { project, role, startDate, endDate, selectedDateUnit , selectedRefreshInterval } });
  };

  const [project, setProject] = useState("");
  const [formData, setFormData] = useState({});
  const [projects, setProjects] = useState([]);
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateUnit, setDateUnit] = useState([]);
  const [selectedDateUnit, setSelectedDateUnit] = useState(null);
 const [selectedProjectKey, setSelectedProjectKey] = useState(null); // Initialize to null
 const [refreshInterval, setRefreshInterval] = useState([]);
 const [selectedRefreshInterval, setSelectedRefreshInterval] = useState(null);
  useEffect(() => {
  async function fetchProjects() {
    try {
      console.log("entered fetchProjects new");
      const response = await requestJira(`/rest/api/3/project/search`, {
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log("fetchProjects");
      const responseJson = await response.json();
      //const projectNames = responseJson.values.map((project) => project.name);
      const projectNames = responseJson.values.map((project) => ({
        key: project.key,
        name: project.name
      }));
      console.log("Project Names:", projectNames);

      setProjects(projectNames);
      console.log("responseJson.values",responseJson.values);
      console.log("exit fetchProjects");
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  fetchProjects(); // Call the function here
}, []);


 
 //this below function is working fine   
 async function fetchRoles(selectedProjectKey) {
  if (selectedProjectKey !== null) {
        try {
          const response = await requestJira(`/rest/api/3/project/${selectedProjectKey}/role`, {
            headers: {
              'content-type': 'application/json',
            },
          });
          const responseJson = await response.json();
          console.log("responseJson roles", responseJson);

          // Initialize an array to store role objects
          const roles = [];

          // Add the "All" option to the roles array
          roles.push({ id: 'All', name: 'All' });

          // Iterate through the key-value pairs in the responseJson
          for (const roleName in responseJson) {
            if (responseJson.hasOwnProperty(roleName)) {
              const roleUrl = responseJson[roleName];
              console.log("roleUrl", roleUrl);
              const roleId = roleUrl.split('/').pop(); // Extract the role ID from the URL
              roles.push({
                id: roleId,
                name: roleName,
              });
            }
          }

          console.log("Roles:", roles);
    // Now you can set the roles in your component state
    // For example, assuming you have a setRoles function:
     setRoles(roles);

  } catch (error) {
    console.error('Error fetching roles for the selected project:', error);
  }
  
  }
  
}
    	
   useEffect(() => {
    
    const simulatedTimeUnit = [
      { id: 1, name: 'Last Week' },
      { id: 2, name: 'Last Month' },
      { id: 3, name: 'Last 3 Months' },
      { id: 4, name: 'Custom' },
    ];
    console.log('simulatedTimeUnit:', simulatedTimeUnit);
    setDateUnit(simulatedTimeUnit);
  }, []); // Run this effect only once on component mount

  useEffect(() => {
    
    const refresh = [
      { id: 1, name: 'Never' },
      { id: 2, name: 'Every 15 minutes' },
      { id: 3, name: 'Every 30 minutes' },
      { id: 4, name: 'Every 1 hour' },
      { id: 5, name: 'Every 3 hour' },
    ];
    console.log('refresh:', refresh);
    setRefreshInterval(refresh);
  }, []); // Run this effect only once on component mount

  


  
  const handleProjectChange = (e) => {
    const selectedProjectKey = e.target.value;
    setProject(selectedProjectKey);
    setSelectedProjectKey(selectedProjectKey); // Set the selectedProjectKey when a project is selected

    // Check if a project is selected before calling fetchRoles
    if (selectedProjectKey) {
      fetchRoles(selectedProjectKey);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDateUnitChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDateUnit(selectedValue);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleRefreshChange = (e) => {
    const selectedRefresh = e.target.value;
    setSelectedRefreshInterval(selectedRefresh);
  };


  return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <div>
        <label>
          Select Project:
          <select value={project} onChange={handleProjectChange} isMulti>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
            ))}
  	 </select>
        </label>
      </div>

      <div>
        <label>
          Select Role:
          <select value={role} onChange={handleRoleChange}>
            <option value="">Select a role</option>
            {roles.map((r) => (
        	<option key={r.id} value={r.id}>
          	{r.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Select DateUnit:
          <select value={selectedDateUnit} onChange={handleDateUnitChange}>
            <option value="">Select a DateUnit</option>
            {dateUnit.map((du) => (
              <option key={du.id} value={du.name}>
                {du.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </label>
        </div>
      )}

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </label>
        </div>
      )}
      
      <div>
        <label>
          Select Refresh Interval:
          <select value={selectedRefreshInterval} onChange={handleRefreshChange}>
            <option value="">Refresh Interval</option>
            {refreshInterval.map((du1) => (
              <option key={du1.id} value={du1.name}>
                {du1.name}
              </option>
            ))}
          </select>
        </label>
      </div>
          <br/>
          <ButtonGroup>
            <Button type="submit" isDisabled={submitting}>Save</Button>
            <Button appearance="subtle" onClick={view.close}>Cancel</Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}

export default Edit;
