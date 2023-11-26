// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for cute dogs documents */
interface CuteDogsDocumentData {
    /**
     * Dogs field in *cute dogs*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: cute_dogs.dogs[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    dogs: prismicT.GroupField<Simplify<CuteDogsDocumentDataDogsItem>>;
}
/**
 * Item in cute dogs → Dogs
 *
 */
export interface CuteDogsDocumentDataDogsItem {
    /**
     * Dog field in *cute dogs → Dogs*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: cute_dogs.dogs[].dog
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    dog: prismicT.LinkField;
    /**
     * Link field in *cute dogs → Dogs*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: cute_dogs.dogs[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * cute dogs document from Prismic
 *
 * - **API ID**: `cute_dogs`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CuteDogsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<CuteDogsDocumentData>, "cute_dogs", Lang>;
/** Content for How to documents */
interface HowToDocumentData {
    /**
     * How to field in *How to*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: how_to.how_to[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    how_to: prismicT.GroupField<Simplify<HowToDocumentDataHowToItem>>;
}
/**
 * Item in How to → How to
 *
 */
export interface HowToDocumentDataHowToItem {
    /**
     * Title field in *How to → How to*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: how_to.how_to[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Link field in *How to → How to*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: how_to.how_to[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Steps field in *How to → How to*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: how_to.how_to[].steps
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    steps: prismicT.NumberField;
    /**
     * Rating field in *How to → How to*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: how_to.how_to[].rating
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    rating: prismicT.NumberField;
    /**
     * Summary field in *How to → How to*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: how_to.how_to[].summary
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    summary: prismicT.RichTextField;
}
/**
 * How to document from Prismic
 *
 * - **API ID**: `how_to`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HowToDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HowToDocumentData>, "how_to", Lang>;
/** Content for works documents */
interface WorksDocumentData {
    /**
     * Title field in *works*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: works.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Year field in *works*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: works.year
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    year: prismicT.KeyTextField;
    /**
     * Mini Thumbnail field in *works*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: works.mini_thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    mini_thumbnail: prismicT.ImageField<never>;
    /**
     * Thumbnail field in *works*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: works.thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    thumbnail: prismicT.LinkField;
    /**
     * Thumbnail Hover field in *works*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: works.thumbnail_hover
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    thumbnail_hover: prismicT.LinkField;
    /**
     * Summary field in *works*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: works.summary
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    summary: prismicT.RichTextField;
    /**
     * Slice Zone field in *works*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: works.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<WorksDocumentDataSlicesSlice>;
}
/**
 * Slice for *works → Slice Zone*
 *
 */
type WorksDocumentDataSlicesSlice = CreditsSlice | DetailTextSlice | WorkDetailMedia16X9Slice | WorkDetailMedia1X1Slice | WorkDetailMedia9X16Slice | LinkButtonSlice | WorkDetailMedia4X5Slice;
/**
 * works document from Prismic
 *
 * - **API ID**: `works`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorksDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<WorksDocumentData>, "works", Lang>;
export type AllDocumentTypes = CuteDogsDocument | HowToDocument | WorksDocument;
/**
 * Item in Credits → Items
 *
 */
export interface CreditsSliceDefaultItem {
    /**
     * Title field in *Credits → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: credits.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Name field in *Credits → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: credits.items[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
}
/**
 * Default variation for Credits Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Credits`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CreditsSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<CreditsSliceDefaultItem>>;
/**
 * Slice variation for *Credits*
 *
 */
type CreditsSliceVariation = CreditsSliceDefault;
/**
 * Credits Shared Slice
 *
 * - **API ID**: `credits`
 * - **Description**: `Credits`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CreditsSlice = prismicT.SharedSlice<"credits", CreditsSliceVariation>;
/**
 * Primary content in DetailText → Primary
 *
 */
interface DetailTextSliceDefaultPrimary {
    /**
     * Text field in *DetailText → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: detail_text.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for DetailText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `DetailText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DetailTextSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<DetailTextSliceDefaultPrimary>, never>;
/**
 * Slice variation for *DetailText*
 *
 */
type DetailTextSliceVariation = DetailTextSliceDefault;
/**
 * DetailText Shared Slice
 *
 * - **API ID**: `detail_text`
 * - **Description**: `DetailText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DetailTextSlice = prismicT.SharedSlice<"detail_text", DetailTextSliceVariation>;
/**
 * Primary content in LinkButton → Primary
 *
 */
interface LinkButtonSliceDefaultPrimary {
    /**
     * Name field in *LinkButton → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: link_button.primary.name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Link field in *LinkButton → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: link_button.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for LinkButton Slice
 *
 * - **API ID**: `default`
 * - **Description**: `LinkButton`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LinkButtonSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<LinkButtonSliceDefaultPrimary>, never>;
/**
 * Slice variation for *LinkButton*
 *
 */
type LinkButtonSliceVariation = LinkButtonSliceDefault;
/**
 * LinkButton Shared Slice
 *
 * - **API ID**: `link_button`
 * - **Description**: `LinkButton`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LinkButtonSlice = prismicT.SharedSlice<"link_button", LinkButtonSliceVariation>;
/**
 * Primary content in WorkDetailMedia16X9 → Primary
 *
 */
interface WorkDetailMedia16X9SliceDefaultPrimary {
    /**
     * Media field in *WorkDetailMedia16X9 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media16_x9.primary.media
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media: prismicT.LinkField;
    /**
     * Autoplay field in *WorkDetailMedia16X9 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media16_x9.primary.autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    autoplay: prismicT.BooleanField;
}
/**
 * Default variation for WorkDetailMedia16X9 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `WorkDetailMedia16X9`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia16X9SliceDefault = prismicT.SharedSliceVariation<"default", Simplify<WorkDetailMedia16X9SliceDefaultPrimary>, never>;
/**
 * Primary content in WorkDetailMedia16X9 → Primary
 *
 */
interface WorkDetailMedia16X9SliceFullPrimary {
    /**
     * Media field in *WorkDetailMedia16X9 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media16_x9.primary.media
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media: prismicT.LinkField;
    /**
     * Autoplay field in *WorkDetailMedia16X9 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media16_x9.primary.autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    autoplay: prismicT.BooleanField;
}
/**
 * Full variation for WorkDetailMedia16X9 Slice
 *
 * - **API ID**: `full`
 * - **Description**: `WorkDetailMedia16X9`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia16X9SliceFull = prismicT.SharedSliceVariation<"full", Simplify<WorkDetailMedia16X9SliceFullPrimary>, never>;
/**
 * Item in WorkDetailMedia16X9 → Items
 *
 */
export interface WorkDetailMedia16X9SliceSliderItem {
    /**
     * Media field in *WorkDetailMedia16X9 → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media16_x9.items[].media
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media: prismicT.LinkField;
}
/**
 * Slider variation for WorkDetailMedia16X9 Slice
 *
 * - **API ID**: `slider`
 * - **Description**: `WorkDetailMedia16X9`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia16X9SliceSlider = prismicT.SharedSliceVariation<"slider", Record<string, never>, Simplify<WorkDetailMedia16X9SliceSliderItem>>;
/**
 * Slice variation for *WorkDetailMedia16X9*
 *
 */
type WorkDetailMedia16X9SliceVariation = WorkDetailMedia16X9SliceDefault | WorkDetailMedia16X9SliceFull | WorkDetailMedia16X9SliceSlider;
/**
 * WorkDetailMedia16X9 Shared Slice
 *
 * - **API ID**: `work_detail_media16_x9`
 * - **Description**: `WorkDetailMedia16X9`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia16X9Slice = prismicT.SharedSlice<"work_detail_media16_x9", WorkDetailMedia16X9SliceVariation>;
/**
 * Primary content in WorkDetailMedia1X1 → Primary
 *
 */
interface WorkDetailMedia1X1SliceDefaultPrimary {
    /**
     * Media field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media1_x1.primary.media
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media: prismicT.LinkField;
    /**
     * Autoplay field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media1_x1.primary.autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    autoplay: prismicT.BooleanField;
}
/**
 * Default variation for WorkDetailMedia1X1 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `WorkDetailMedia1X1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia1X1SliceDefault = prismicT.SharedSliceVariation<"default", Simplify<WorkDetailMedia1X1SliceDefaultPrimary>, never>;
/**
 * Primary content in WorkDetailMedia1X1 → Primary
 *
 */
interface WorkDetailMedia1X1Slice2RowPrimary {
    /**
     * Media1 field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media1_x1.primary.media1
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media1: prismicT.LinkField;
    /**
     * Media1Slider field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media1_x1.primary.media1slider
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media1slider: prismicT.BooleanField;
    /**
     * Media1Autoplay field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: true
     * - **API ID Path**: work_detail_media1_x1.primary.media1Autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media1Autoplay: prismicT.BooleanField;
    /**
     * Media2 field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media1_x1.primary.media2
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media2: prismicT.LinkField;
    /**
     * Media2Slider field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media1_x1.primary.media2slider
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media2slider: prismicT.BooleanField;
    /**
     * Media2Autoplay field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: true
     * - **API ID Path**: work_detail_media1_x1.primary.media2Autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media2Autoplay: prismicT.BooleanField;
}
/**
 * Item in WorkDetailMedia1X1 → Items
 *
 */
export interface WorkDetailMedia1X1Slice2RowItem {
    /**
     * Media1 field in *WorkDetailMedia1X1 → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media1_x1.items[].media1
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media1: prismicT.LinkField;
    /**
     * Media2 field in *WorkDetailMedia1X1 → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media1_x1.items[].media2
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media2: prismicT.LinkField;
}
/**
 * 2 row variation for WorkDetailMedia1X1 Slice
 *
 * - **API ID**: `2Row`
 * - **Description**: `WorkDetailMedia1X1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia1X1Slice2Row = prismicT.SharedSliceVariation<"2Row", Simplify<WorkDetailMedia1X1Slice2RowPrimary>, Simplify<WorkDetailMedia1X1Slice2RowItem>>;
/**
 * Item in WorkDetailMedia1X1 → Items
 *
 */
export interface WorkDetailMedia1X1SliceSliderItem {
    /**
     * Media field in *WorkDetailMedia1X1 → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media1_x1.items[].media
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media: prismicT.LinkField;
}
/**
 * Slider variation for WorkDetailMedia1X1 Slice
 *
 * - **API ID**: `slider`
 * - **Description**: `WorkDetailMedia1X1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia1X1SliceSlider = prismicT.SharedSliceVariation<"slider", Record<string, never>, Simplify<WorkDetailMedia1X1SliceSliderItem>>;
/**
 * Primary content in WorkDetailMedia1X1 → Primary
 *
 */
interface WorkDetailMedia1X1SliceFullPrimary {
    /**
     * Media field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media1_x1.primary.media
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media: prismicT.LinkField;
    /**
     * Autoplay field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media1_x1.primary.autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    autoplay: prismicT.BooleanField;
}
/**
 * Full variation for WorkDetailMedia1X1 Slice
 *
 * - **API ID**: `full`
 * - **Description**: `WorkDetailMedia1X1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia1X1SliceFull = prismicT.SharedSliceVariation<"full", Simplify<WorkDetailMedia1X1SliceFullPrimary>, never>;
/**
 * Primary content in WorkDetailMedia1X1 → Primary
 *
 */
interface WorkDetailMedia1X1Slice3RowsPrimary {
    /**
     * Media1 field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media1_x1.primary.media1
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media1: prismicT.LinkField;
    /**
     * Media1Autoplay field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media1_x1.primary.media1Autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media1Autoplay: prismicT.BooleanField;
    /**
     * Media2 field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media1_x1.primary.media2
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media2: prismicT.LinkField;
    /**
     * Media2Autoplay field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media1_x1.primary.media2Autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media2Autoplay: prismicT.BooleanField;
    /**
     * Media3 field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media1_x1.primary.media3
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media3: prismicT.LinkField;
    /**
     * Media3Autoplay field in *WorkDetailMedia1X1 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media1_x1.primary.media3Autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media3Autoplay: prismicT.BooleanField;
}
/**
 * 3 Rows variation for WorkDetailMedia1X1 Slice
 *
 * - **API ID**: `3Rows`
 * - **Description**: `WorkDetailMedia1X1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia1X1Slice3Rows = prismicT.SharedSliceVariation<"3Rows", Simplify<WorkDetailMedia1X1Slice3RowsPrimary>, never>;
/**
 * Slice variation for *WorkDetailMedia1X1*
 *
 */
type WorkDetailMedia1X1SliceVariation = WorkDetailMedia1X1SliceDefault | WorkDetailMedia1X1Slice2Row | WorkDetailMedia1X1SliceSlider | WorkDetailMedia1X1SliceFull | WorkDetailMedia1X1Slice3Rows;
/**
 * WorkDetailMedia1X1 Shared Slice
 *
 * - **API ID**: `work_detail_media1_x1`
 * - **Description**: `WorkDetailMedia1X1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia1X1Slice = prismicT.SharedSlice<"work_detail_media1_x1", WorkDetailMedia1X1SliceVariation>;
/**
 * Primary content in WorkDetailMedia4X5 → Primary
 *
 */
interface WorkDetailMedia4X5SliceDefaultPrimary {
    /**
     * Media1 field in *WorkDetailMedia4X5 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media4_x5.primary.media1
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media1: prismicT.LinkField;
    /**
     * Autoplay1 field in *WorkDetailMedia4X5 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media4_x5.primary.autoplay1
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    autoplay1: prismicT.BooleanField;
    /**
     * Media2 field in *WorkDetailMedia4X5 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media4_x5.primary.media2
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media2: prismicT.LinkField;
    /**
     * Autoplay2 field in *WorkDetailMedia4X5 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media4_x5.primary.autoplay2
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    autoplay2: prismicT.BooleanField;
}
/**
 * Default variation for WorkDetailMedia4X5 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `WorkDetailMedia4X5`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia4X5SliceDefault = prismicT.SharedSliceVariation<"default", Simplify<WorkDetailMedia4X5SliceDefaultPrimary>, never>;
/**
 * Slice variation for *WorkDetailMedia4X5*
 *
 */
type WorkDetailMedia4X5SliceVariation = WorkDetailMedia4X5SliceDefault;
/**
 * WorkDetailMedia4X5 Shared Slice
 *
 * - **API ID**: `work_detail_media4_x5`
 * - **Description**: `WorkDetailMedia4X5`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia4X5Slice = prismicT.SharedSlice<"work_detail_media4_x5", WorkDetailMedia4X5SliceVariation>;
/**
 * Primary content in WorkDetailMedia9X16 → Primary
 *
 */
interface WorkDetailMedia9X16SliceDefaultPrimary {
    /**
     * Media field in *WorkDetailMedia9X16 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media9_x16.primary.media
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media: prismicT.LinkField;
    /**
     * Autoplay field in *WorkDetailMedia9X16 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media9_x16.primary.autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    autoplay: prismicT.BooleanField;
}
/**
 * Default variation for WorkDetailMedia9X16 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `WorkDetailMedia9X16`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia9X16SliceDefault = prismicT.SharedSliceVariation<"default", Simplify<WorkDetailMedia9X16SliceDefaultPrimary>, never>;
/**
 * Primary content in WorkDetailMedia9X16 → Primary
 *
 */
interface WorkDetailMedia9X16Slice2RowPrimary {
    /**
     * Media1 field in *WorkDetailMedia9X16 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media9_x16.primary.media1
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media1: prismicT.LinkField;
    /**
     * Media1Slider field in *WorkDetailMedia9X16 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media9_x16.primary.media1slider
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media1slider: prismicT.BooleanField;
    /**
     * Media1Autoplay field in *WorkDetailMedia9X16 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media9_x16.primary.media1autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media1autoplay: prismicT.BooleanField;
    /**
     * Media2 field in *WorkDetailMedia9X16 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media9_x16.primary.media2
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media2: prismicT.LinkField;
    /**
     * Media2Slider field in *WorkDetailMedia9X16 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media9_x16.primary.media2slider
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media2slider: prismicT.BooleanField;
    /**
     * Media2Autoplay field in *WorkDetailMedia9X16 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: work_detail_media9_x16.primary.media2autoplay
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    media2autoplay: prismicT.BooleanField;
}
/**
 * Item in WorkDetailMedia9X16 → Items
 *
 */
export interface WorkDetailMedia9X16Slice2RowItem {
    /**
     * Media1 field in *WorkDetailMedia9X16 → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media9_x16.items[].media1
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media1: prismicT.LinkField;
    /**
     * Media2 field in *WorkDetailMedia9X16 → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: work_detail_media9_x16.items[].media2
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    media2: prismicT.LinkField;
}
/**
 * 2 row variation for WorkDetailMedia9X16 Slice
 *
 * - **API ID**: `2Row`
 * - **Description**: `WorkDetailMedia9X16`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia9X16Slice2Row = prismicT.SharedSliceVariation<"2Row", Simplify<WorkDetailMedia9X16Slice2RowPrimary>, Simplify<WorkDetailMedia9X16Slice2RowItem>>;
/**
 * Slice variation for *WorkDetailMedia9X16*
 *
 */
type WorkDetailMedia9X16SliceVariation = WorkDetailMedia9X16SliceDefault | WorkDetailMedia9X16Slice2Row;
/**
 * WorkDetailMedia9X16 Shared Slice
 *
 * - **API ID**: `work_detail_media9_x16`
 * - **Description**: `WorkDetailMedia9X16`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkDetailMedia9X16Slice = prismicT.SharedSlice<"work_detail_media9_x16", WorkDetailMedia9X16SliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { CuteDogsDocumentData, CuteDogsDocumentDataDogsItem, CuteDogsDocument, HowToDocumentData, HowToDocumentDataHowToItem, HowToDocument, WorksDocumentData, WorksDocumentDataSlicesSlice, WorksDocument, AllDocumentTypes, CreditsSliceDefaultItem, CreditsSliceDefault, CreditsSliceVariation, CreditsSlice, DetailTextSliceDefaultPrimary, DetailTextSliceDefault, DetailTextSliceVariation, DetailTextSlice, LinkButtonSliceDefaultPrimary, LinkButtonSliceDefault, LinkButtonSliceVariation, LinkButtonSlice, WorkDetailMedia16X9SliceDefaultPrimary, WorkDetailMedia16X9SliceDefault, WorkDetailMedia16X9SliceFullPrimary, WorkDetailMedia16X9SliceFull, WorkDetailMedia16X9SliceSliderItem, WorkDetailMedia16X9SliceSlider, WorkDetailMedia16X9SliceVariation, WorkDetailMedia16X9Slice, WorkDetailMedia1X1SliceDefaultPrimary, WorkDetailMedia1X1SliceDefault, WorkDetailMedia1X1Slice2RowPrimary, WorkDetailMedia1X1Slice2RowItem, WorkDetailMedia1X1Slice2Row, WorkDetailMedia1X1SliceSliderItem, WorkDetailMedia1X1SliceSlider, WorkDetailMedia1X1SliceFullPrimary, WorkDetailMedia1X1SliceFull, WorkDetailMedia1X1Slice3RowsPrimary, WorkDetailMedia1X1Slice3Rows, WorkDetailMedia1X1SliceVariation, WorkDetailMedia1X1Slice, WorkDetailMedia4X5SliceDefaultPrimary, WorkDetailMedia4X5SliceDefault, WorkDetailMedia4X5SliceVariation, WorkDetailMedia4X5Slice, WorkDetailMedia9X16SliceDefaultPrimary, WorkDetailMedia9X16SliceDefault, WorkDetailMedia9X16Slice2RowPrimary, WorkDetailMedia9X16Slice2RowItem, WorkDetailMedia9X16Slice2Row, WorkDetailMedia9X16SliceVariation, WorkDetailMedia9X16Slice };
    }
}
