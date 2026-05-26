import { defineField, defineType } from "sanity";

export default defineType({
  name: "motor",
  title: "Trolling Motors",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Motor Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "condition",
      title: "Condition",
      type: "string",
      options: {
        list: [
          { title: "Refurbished", value: "Refurbished" },
          { title: "Used", value: "Used" },
          { title: "New", value: "New" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price ($)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "thrust",
      title: "Thrust",
      type: "string",
      placeholder: "e.g. 80 lbs",
    }),
    defineField({
      name: "shaft",
      title: "Shaft Length",
      type: "string",
      placeholder: 'e.g. 45"',
    }),
    defineField({
      name: "voltage",
      title: "Voltage",
      type: "string",
      placeholder: "e.g. 24V",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "Add features like iPilot GPS, Spot-Lock, etc.",
    }),
    defineField({
      name: "notes",
      title: "Notes",
      type: "text",
      rows: 3,
      description: "Short note shown on the card in italics.",
    }),
    defineField({
      name: "image",
      title: "Motor Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      description: "Uncheck to hide this motor from the site.",
      initialValue: true,
    }),
  ],
});