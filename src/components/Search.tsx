import React from "react";

export const Search = () => {
  return (
    <div
      className=''
      style={{
        marginBottom: "110px",
      }}>
      <div className='text-center'>
        <h4 className='text-white'>IP ADDRESS TRACKER</h4>
      </div>
      <div
        className=''
        style={{
          width: "400px",
        }}>
        <form action=''>
          <div className='d-flex align-items-center px-md-0 px-5'>
            <div className='input-group mb-n5'>
              <input
                type='text'
                className='form-control'
                placeholder='Search for any IP address or domain'
                style={{
                  color: "#999999",
                  fontStyle: "italic",
                }}
                aria-label="Recipient's username"
                aria-describedby='button-addon2'
              />
              <button
                style={{
                  backgroundColor: "hsl(0, 0%, 17%)",
                }}
                className='btn'
                type='button'
                id='button-addon2'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='11'
                    height='14'>
                    <path
                      fill='none'
                      stroke='#FFF'
                      stroke-width='3'
                      d='M2 1l6 6-6 6'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
