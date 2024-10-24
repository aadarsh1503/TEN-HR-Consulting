import React, { useEffect, useState } from 'react'
import "./jobVacancies.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { countries, jobCategories, jobPosts } from './constant';
import { useNavigate } from 'react-router-dom';


const JobVacancies = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Locations');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const initialCategories = jobCategories.slice(0, 6);
  const remainingCategories = jobCategories.slice(6);
  const [routeData, setRouteData] = useState(jobPosts);
  const [dataArr, setDataArr] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState(null);



  const handleDropdownToggle = () => {
    if (showDropdown) {
      setDataArr(initialCategories)
    } else {
      const Arr = initialCategories.concat(remainingCategories)
      setDataArr(Arr)
    }
    setShowDropdown(!showDropdown);
  };





  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };


  const handleCategoryClick = (jobData) => {
    setSelectedCategory(jobData.category);
    setRouteData(jobData.data)

  };

  const handleToggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };





  const navigate = useNavigate()

  return (
    <div>
      {/* job */}
      <div className='job'>
        <div className='job-text'>
          <h4>FIND YOUR PERFECT MATCH</h4>
          <h1>Job Vacancies</h1>
          <p>Find Oppurtunity for your future here</p>
        </div>
      </div>
      {/* Job search */}
      <div className='job-search'>
        <div className='  job-post'>
          <div className=' job-search-container'>
            <div className='location'>
              <div className='location-filter'>Location Filter</div>
              <div id="dropDownDATA" onClick={handleDropdownToggle}>
                <span id="dropDown-country-name">{selectedCountry}</span>
                <svg role="presentation" focusable="false" width="10" height="7" id="dropDown-arrow" viewBox="0 0 10 7">
                  <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>
              {showDropdown && (
                <div id="INRDropdown">
                  {countries.map((country, index) => (
                    <div key={index} className={`location-item ${selectedCountry === country.name ? 'selected-country' : ''}`} onClick={() => handleCountrySelect(country.name)} >
                      <span id="dropDown-country-name">{`${country.name}`}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className='find-location'>
                <button className='find-button' >Find Locations</button>
              </div>
              <div className='categories'>
                <div className='job-categories'>Job Categories</div>
                <div className='d-flex flex-row flex-wrap job-category-item'>
                  {dataArr.map((job, index) => {


                    return (
                      <div key={index} className="job-categorie-button m-1">
                        <button
                          className="button-all p-2 " style={{
                            backgroundColor: selectedCategory === job.category ? '#15357A' : 'initial',
                            color: selectedCategory === job.category ? 'white' : 'black',
                          }}
                          onClick={() => handleCategoryClick(job)}
                        >
                          {job.category}
                        </button>
                      </div>
                    )
                  })

                  }

                  {showAllCategories && remainingCategories.map((job, index) => (

                    <div key={index} className="job-categorie-button m-1">
                      <button
                        className="button-all p-2" style={{
                          backgroundColor: selectedCategory === job.category ? '15357A' : 'initial',
                          color: selectedCategory === job.category ? 'white' : 'black',
                        }}
                        onClick={() => handleCategoryClick(job)}
                      >


                        {job.category}
                      </button>
                    </div>
                  ))}



                  <div className="more-less-button m-1">
                    <div className="button-more p-2" onClick={handleToggleCategories}>
                      {showAllCategories ? 'Less' : 'More'}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* job apply */}
          <div className='d-flex flex-column'>
            {
              routeData.map((data, index) => {
                return (
                  <div key={index} className='job-apply-div'>
                    <div className='job-apply'>
                      <div>
                        <div className='job-heading'>
                          <h3>{data.jobHeading}</h3>
                        </div>
                        <div>
                          <div>{data.jobcategory}</div>
                        </div>
                        <div className='job-deatils'>
                          <div className='d-flex job-heading-post'>
                            <svg className='setting-icons' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g id="carbon:settings-view"><path id="Vector" d="M12.9375 14.625C13.5588 14.625 14.0625 14.1213 14.0625 13.5C14.0625 12.8787 13.5588 12.375 12.9375 12.375C12.3162 12.375 11.8125 12.8787 11.8125 13.5C11.8125 14.1213 12.3162 14.625 12.9375 14.625Z" fill="#435159" fillOpacity="0.81"></path><path id="Vector_2" d="M17.3121 13.2065C16.9645 12.3211 16.3648 11.5571 15.5871 11.0093C14.8095 10.4614 13.8883 10.1538 12.9375 10.1246C11.9867 10.1538 11.0655 10.4614 10.2879 11.0093C9.51025 11.5571 8.9105 12.3211 8.56294 13.2065L8.4375 13.4996L8.56294 13.7926C8.9105 14.6781 9.51025 15.4421 10.2879 15.9899C11.0655 16.5377 11.9867 16.8453 12.9375 16.8746C13.8883 16.8453 14.8095 16.5377 15.5871 15.9899C16.3648 15.4421 16.9645 14.6781 17.3121 13.7926L17.4375 13.4996L17.3121 13.2065ZM12.9375 15.7496C12.4925 15.7496 12.0575 15.6176 11.6875 15.3704C11.3175 15.1232 11.0291 14.7717 10.8588 14.3606C10.6885 13.9495 10.6439 13.4971 10.7307 13.0606C10.8176 12.6242 11.0318 12.2233 11.3465 11.9086C11.6612 11.5939 12.0621 11.3796 12.4985 11.2928C12.935 11.206 13.3874 11.2506 13.7985 11.4208C14.2097 11.5911 14.5611 11.8795 14.8083 12.2495C15.0555 12.6196 15.1875 13.0546 15.1875 13.4996C15.1868 14.0961 14.9495 14.6679 14.5277 15.0897C14.1059 15.5115 13.534 15.7488 12.9375 15.7496ZM6.97444 11.6996C6.51432 11.3543 6.15007 10.8972 5.91629 10.3716C5.68251 9.84603 5.58694 9.2694 5.63868 8.69649C5.69041 8.12357 5.88772 7.57339 6.21187 7.09817C6.53602 6.62296 6.97626 6.23848 7.49078 5.98125C8.00531 5.72401 8.57704 5.60256 9.1517 5.62841C9.72636 5.65427 10.2849 5.82658 10.7742 6.12898C11.2636 6.43138 11.6675 6.85384 11.9477 7.35625C12.2278 7.85866 12.3749 8.42434 12.375 8.99958H11.25C11.25 8.61605 11.152 8.23889 10.9652 7.90391C10.7784 7.56893 10.5091 7.28725 10.1829 7.08561C9.85665 6.88398 9.48427 6.76909 9.10113 6.75185C8.71799 6.73461 8.33681 6.8156 7.99377 6.98712C7.65073 7.15864 7.35723 7.41499 7.14114 7.73185C6.92505 8.0487 6.79354 8.41554 6.75909 8.79752C6.72465 9.17949 6.78842 9.56393 6.94435 9.91433C7.10027 10.2647 7.34318 10.5695 7.65 10.7996L6.97444 11.6996Z" fill="#435159" fill-opacity="0.81"></path><path id="Vector_3" d="M16.4843 6.21225L15.1568 3.91275C15.0269 3.68719 14.8228 3.51369 14.5793 3.42188C14.3357 3.33006 14.0679 3.32562 13.8214 3.40931L12.4523 3.87281C12.2163 3.71396 11.9698 3.5715 11.7143 3.44644L11.4308 2.02894C11.3797 1.77401 11.2419 1.54465 11.0408 1.37985C10.8397 1.21506 10.5877 1.125 10.3277 1.125H7.67272C7.41264 1.12503 7.16061 1.21516 6.9595 1.38007C6.75839 1.54498 6.62063 1.77447 6.56965 2.0295L6.28615 3.44587C6.02779 3.56974 5.77838 3.71146 5.53972 3.87L4.17847 3.40931C3.93216 3.32591 3.66456 3.33051 3.42126 3.42231C3.17797 3.51411 2.97403 3.68743 2.84422 3.91275L1.51671 6.21225C1.38667 6.43741 1.33864 6.70067 1.38079 6.95725C1.42294 7.21384 1.55266 7.44789 1.7479 7.61962L2.83409 8.57419C2.82453 8.71594 2.81272 8.85656 2.81272 9C2.81272 9.14513 2.81834 9.28856 2.82846 9.43088L1.74846 10.3804C1.55304 10.552 1.4231 10.7859 1.38075 11.0425C1.33839 11.2991 1.38624 11.5625 1.51615 11.7877L2.84365 14.0873C2.97351 14.3128 3.17764 14.4863 3.42118 14.5781C3.66472 14.6699 3.93258 14.6744 4.17903 14.5907L5.54815 14.1272C5.78402 14.2863 6.03061 14.429 6.28615 14.5541L6.56909 15.9705C6.62008 16.2256 6.75793 16.4552 6.95915 16.6201C7.16038 16.785 7.41254 16.8751 7.67272 16.875H8.43772V15.75H7.67272L7.27334 13.7531C6.72087 13.5479 6.20801 13.2487 5.7574 12.8689L3.81847 13.5248L2.49097 11.2252L4.02378 9.87806C3.91891 9.29637 3.91758 8.70072 4.01984 8.11856L2.49097 6.77419L3.81847 4.47525L5.74615 5.12775C6.19998 4.74735 6.71682 4.44923 7.27334 4.24688L7.67272 2.25H10.3277L10.7271 4.24688C11.2796 4.45214 11.7924 4.75128 12.243 5.13112L14.182 4.47525L15.5095 6.77475L13.9356 8.154L14.677 9L16.252 7.61962C16.4474 7.44804 16.5773 7.21405 16.6197 6.95746C16.662 6.70087 16.6142 6.43754 16.4843 6.21225Z" fill="#435159" fillOpacity="0.81"></path></g></svg>
                            <div className='job-name'>{data.jobName}</div>
                          </div>
                          <div className='d-flex'>
                            <svg className='degree-icons' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g id="carbon:education"><path id="Vector" d="M14.625 16.875H13.5V15.1875C13.4991 14.4419 13.2025 13.727 12.6753 13.1997C12.148 12.6725 11.4331 12.3759 10.6875 12.375H7.3125C6.56685 12.3759 5.852 12.6725 5.32475 13.1997C4.7975 13.727 4.50089 14.4419 4.5 15.1875V16.875H3.375V15.1875C3.37619 14.1436 3.79142 13.1427 4.52958 12.4046C5.26775 11.6664 6.26858 11.2512 7.3125 11.25H10.6875C11.7314 11.2512 12.7323 11.6664 13.4704 12.4046C14.2086 13.1427 14.6238 14.1436 14.625 15.1875V16.875ZM2.8125 3.375C2.66332 3.375 2.52024 3.43426 2.41475 3.53975C2.30926 3.64524 2.25 3.78832 2.25 3.9375V9H3.375V3.9375C3.375 3.78832 3.31574 3.64524 3.21025 3.53975C3.10476 3.43426 2.96168 3.375 2.8125 3.375Z" fill="#435159" fill-opacity="0.81"></path><path id="Vector_2" d="M2.25 1.125V2.25H5.0625V6.1875C5.0625 7.23179 5.47734 8.23331 6.21577 8.97173C6.95419 9.71016 7.95571 10.125 9 10.125C10.0443 10.125 11.0458 9.71016 11.7842 8.97173C12.5227 8.23331 12.9375 7.23179 12.9375 6.1875V2.25H15.75V1.125H2.25ZM6.1875 2.25H11.8125V3.9375H6.1875V2.25ZM9 9C8.25408 9 7.53871 8.70368 7.01126 8.17624C6.48382 7.64879 6.1875 6.93342 6.1875 6.1875V5.0625H11.8125V6.1875C11.8125 6.93342 11.5162 7.64879 10.9887 8.17624C10.4613 8.70368 9.74592 9 9 9Z" fill="#435159" fillOpacity="0.81"></path></g></svg>
                            <div className=' job-degree'>{data.jobdegree}</div>
                          </div>
                          <div className='d-flex'>
                            <svg className='location-icons' xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"><g id="carbon:location-company"><path id="Vector" d="M16 30.5L7.56401 20.551C7.44679 20.4016 7.33079 20.2513 7.21601 20.1C5.77499 18.2018 4.99652 15.8832 5.00001 13.5C5.00001 10.5826 6.15894 7.78473 8.22184 5.72183C10.2847 3.65893 13.0826 2.5 16 2.5C18.9174 2.5 21.7153 3.65893 23.7782 5.72183C25.8411 7.78473 27 10.5826 27 13.5C27.0035 15.8821 26.2254 18.1996 24.785 20.097L24.784 20.1C24.784 20.1 24.484 20.494 24.439 20.547L16 30.5ZM8.81201 18.895C8.81401 18.895 9.04601 19.203 9.09901 19.269L16 27.408L22.91 19.258C22.954 19.203 23.188 18.893 23.189 18.892C24.3662 17.3411 25.0023 15.447 25 13.5C25 11.1131 24.0518 8.82387 22.364 7.13604C20.6761 5.44821 18.387 4.5 16 4.5C13.6131 4.5 11.3239 5.44821 9.63605 7.13604C7.94822 8.82387 7.00001 11.1131 7.00001 13.5C6.99791 15.4482 7.63379 17.3434 8.81201 18.895Z" fill="#033658"></path><path id="Vector_2" d="M21 18.5H19V10.5H13V18.5H11V10.5C11.0005 9.96973 11.2114 9.46133 11.5864 9.08637C11.9613 8.71141 12.4697 8.50053 13 8.5H19C19.5303 8.50053 20.0387 8.71141 20.4136 9.08637C20.7886 9.46133 20.9995 9.96973 21 10.5V18.5Z" fill="#033658"></path><path id="Vector_3" d="M15 16.5H17V18.5H15V16.5ZM15 12.5H17V14.5H15V12.5Z" fill="#033658"></path></g></svg>
                            <div className='job-location'>{data.jobLocation}</div>
                          </div>
                          <div className='d-flex'>
                            <svg className={`salary-icons ${!data.jobSalary.includes('to') ? 'adjust-margin' : ''}`}
                              xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g id="carbon:currency-dollar"><path id="Vector" d="M12.9376 11.5397C12.9376 8.94375 10.8114 8.64787 9.10306 8.4105C7.24119 8.15175 6.18762 7.92675 6.18762 6.32362C6.18762 4.97812 7.59781 4.5 8.8055 4.5C9.40735 4.48056 10.0052 4.60445 10.5497 4.86147C11.0943 5.11849 11.57 5.50127 11.9375 5.97825L12.8127 5.27175C12.4191 4.7656 11.9294 4.34223 11.3716 4.02598C10.8138 3.70974 10.1991 3.50686 9.56262 3.429V1.6875H8.43762V3.38737C6.40419 3.51112 5.06262 4.65862 5.06262 6.32362C5.06262 8.98425 7.217 9.28406 8.94781 9.52425C10.7776 9.77906 11.8126 9.99787 11.8126 11.5397C11.8126 13.2452 10.0503 13.5 9.00012 13.5C7.07075 13.5 6.25625 12.9578 5.50025 12.0217L4.625 12.7283C5.07093 13.3159 5.64769 13.7915 6.3095 14.1173C6.97132 14.4431 7.69997 14.6102 8.43762 14.6053V16.3125H9.56262V14.5997C11.6585 14.4287 12.9376 13.2907 12.9376 11.5397Z" fill="#435159" fillOpacity="0.81"></path></g></svg>
                            <div className='job-salary1'>{data.jobSalary}</div>
                          </div>
                        </div>
                        <div className='apply-now-button'>
                          <button className='apply-buton ' onClick={() => {
                            localStorage.setItem('Selected', JSON.stringify(data));
                            navigate('/applyy', { state: data })
                          }} >Apply Now</button>
                          <div className='apply-button-arrow'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M10.125 3.375L9.32062 4.15856L13.5844 8.4375H2.25V9.5625H13.5844L9.32062 13.8223L10.125 14.625L15.75 9L10.125 3.375Z" fill="#033658"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>


        </div>
      </div>
    </div>
  )
}

export default JobVacancies;
