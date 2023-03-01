import MyComponent from '../../../../slices/WorkDetailMedia1X1';

export default {
  title: 'slices/WorkDetailMedia1X1'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"media":{"link_type":"Web","url":"https://prismic.io"},"autoplay":true},"id":"_Default","slice_type":"work_detail_media1_x1"}} />
_Default.storyName = ''

export const _2Row = () => <MyComponent slice={{"variation":"2Row","version":"sktwi1xtmkfgx8626","items":[{"media1":{"link_type":"Web","url":"https://slicemachine.dev"},"media2":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"media1":{"link_type":"Web","url":"http://twitter.com"},"media1slider":true,"media1Autoplay":true,"media2":{"link_type":"Web","url":"http://twitter.com"},"media2slider":true,"media2Autoplay":false},"id":"_2Row","slice_type":"work_detail_media1_x1"}} />
_2Row.storyName = ''

export const _Slider = () => <MyComponent slice={{"variation":"slider","version":"sktwi1xtmkfgx8626","items":[{"media":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{},"id":"_Slider","slice_type":"work_detail_media1_x1"}} />
_Slider.storyName = ''

export const _Full = () => <MyComponent slice={{"variation":"full","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"media":{"link_type":"Web","url":"http://twitter.com"},"autoplay":false},"id":"_Full","slice_type":"work_detail_media1_x1"}} />
_Full.storyName = ''

export const _3Rows = () => <MyComponent slice={{"variation":"3Rows","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"media1":{"link_type":"Web","url":"https://slicemachine.dev"},"media1Autoplay":false,"media2":{"link_type":"Web","url":"http://twitter.com"},"media2Autoplay":true,"media3":{"link_type":"Web","url":"https://prismic.io"},"media3Autoplay":true},"id":"_3Rows","slice_type":"work_detail_media1_x1"}} />
_3Rows.storyName = ''
