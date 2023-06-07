import * as React from 'react';
import { default as Timeline } from '@mui/lab/Timeline';
import { default as TimelineItem } from '@mui/lab/TimelineItem';
import { default as TimelineSeparator } from '@mui/lab/TimelineSeparator';
import { default as TimelineConnector } from '@mui/lab/TimelineConnector';
import { default as TimelineContent } from '@mui/lab/TimelineContent';
import { default as TimelineOppositeContent  } from '@mui/lab/TimelineOppositeContent';
import { default as TimelineDot } from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import SvgNoaa from './SvgNoaa';
import SvgNws from './SvgNws';
import SvgUmd from './SvgUmd';



export default function Experience() {
  return (
    <div name='experience' className='w-full h-full bg-[#1f242a] flex text-[#b48d22] justify-center items-center'  style={{zIndex:1}}>

<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-[#b48d22] border-[#b48d22]'>
            Experience
          </p>
          <p className='py-6 text-2xl'>Here's where I've been over the past three years</p>
        </div>

        <Timeline>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0', pt: '0px'}}
          align="right"
        >
          September 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineConnector sx={{height:"52px"}}/>
          <TimelineDot>
          <SvgNoaa />
          </TimelineDot>
          <TimelineConnector sx={{height:"56px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{pt:"36px"}}>
        <Typography variant="h6" component="span">
          Undergraduate Research Assistant 
          </Typography>
          <br></br>
          <Typography>
          NOAA
          </Typography>
          <Typography>Coral Reef Conservation Program</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0', pt: '46px'}}
          align="right"
        >
          June 2021
        </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{height:"56px"}}/>
        <TimelineDot>
          <SvgNws />
          </TimelineDot>
          <TimelineConnector sx={{height:"16px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{pt:"40px"}}>
        <Typography variant="h6" component="span">
          Lapenta Intern
          </Typography>
          <br></br>
          <Typography>
          National Weather Service
          </Typography>
          <Typography>Meteorlogical Development Lab</Typography>
        </TimelineContent>

      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0', pt: '18px'}}
          align="right"
        >
          September 2021
        </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{height:"17px"}}/>
        <TimelineDot>
          <SvgUmd />
          </TimelineDot>
          <TimelineConnector sx={{height:"5px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{pt:"12px"}}>
        <Typography variant="h6" component="span">
          Analytics Intern
          </Typography>
          <br></br>
          <Typography>
          University of Maryland
          </Typography>
          <Typography>Men's Basketball Team</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0', pt: '56px'}}
          align="right"
        >
          April 2022
        </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{height:"88px"}}/>
        <TimelineDot>
          <SvgUmd />
          </TimelineDot>
          <TimelineConnector sx={{height:"12px", pb:"40px"}}/>
        </TimelineSeparator>
        <TimelineContent sx={{pt:"62px"}}>
        <Typography variant="h6" component="span">
          Recruiting Student Assistant
          </Typography>
          <br></br>
          <Typography>
          University of Maryland
          </Typography>
          <Typography>Football Team</Typography>
        </TimelineContent>

      </TimelineItem>
    </Timeline>
    </div>
    </div>
  );
}