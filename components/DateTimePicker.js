import React from 'react'
import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'
import { getTimeRanges } from '../lib/time'

import Dropdown from 'components/FormFields/Dropdown'

const times = getTimeRanges(30, 'en')

export default function DateTimePicker ({ pageId }) {
  return (
    <x.div marginBottom="20px">
      <Dropdown
        size="small"
        required
        label="Pick a time"
        id="appointmentTime"
        name="appointmentTime"
        placeholder="Select time"
        pageId={pageId}
        defaultValue={null}
        options={times}
        isOptionDisabled={(option) => option.isdisabled}
      />
    </x.div>
  )
}

DateTimePicker.propTypes = {
  pageId: PropTypes.string
}
