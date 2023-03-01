import MyComponent from '../../../../slices/WorkDetailMedia16X9';

export default {
  title: 'slices/WorkDetailMedia16X9'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"media":{"link_type":"Web","url":"https://slicemachine.dev"},"autoplay":true},"id":"_Default","slice_type":"work_detail_media16_x9"}} />
_Default.storyName = ''

export const _Full = () => <MyComponent slice={{"variation":"full","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"media":{"link_type":"Web","url":"https://slicemachine.dev"},"autoplay":false},"id":"_Full","slice_type":"work_detail_media16_x9"}} />
_Full.storyName = ''

export const _Slider = () => <MyComponent slice={{"variation":"slider","version":"sktwi1xtmkfgx8626","items":[{"media":{"link_type":"Web","url":"http://google.com"}}],"primary":{},"id":"_Slider","slice_type":"work_detail_media16_x9"}} />
_Slider.storyName = ''
