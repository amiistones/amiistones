# Amiistones :flower_playing_cards:

Put any description here

## Stones sides points generation

Every stone have points for each sides:

1. North (top side of the card)
2. East (right side of the card)
3. South (bottom side of the card)
4. West (left side of the card)

### Total sides points per tier

The number of points that a stone have is depending on its tier location (every tier with the same letter have the same total sides points):

- S tier: **12**
- A tier: **10**
- B tier: **8**
- C tier: **6**
- D tier: **5**
- E tier: **4**

### Generating rules

Every tier have more than different total sides points but also differents rules of dispatch those:

- S tier
	- Should not have any side with 0 point
	- Can have 1 or 2 sides with 4 points
- A tier
	- Should not 4 points in any side
	- Should not have any side with 0 point
	- Can have between 1 and 3 sides with 3 points
- B tier
	- Should not 4 points in any side
	- Should not have any side with 0 point
	- Can have between 1 and 3 sides with 2 points
- C tier
	- Should not 4 points in any side
	- Should not have any side with 0 point
- D tier
	- Should not 4 points in any side with at least 1 point
	- Should have 1 side with 0 point
	- Can have between 1 and 3 sides with 2 points
- E tier
	- Can have 2 or 3 sides with 0 point

<details>
	<summary>Total sides points gathering process</summary>

### Total sides points gathering process

Every character have a `characterRank` value in the ***smashBrosTierListCharacters.json*** file:

```json
	{
		"characterNumber": 46,
		"characterName": "Mega Man",
		"characterRank": 48
	},
	{
		"characterNumber": 47,
		"characterName": "Wii Fit Trainer",
		"characterRank": 63
	},
```

Then, the `characterRank` value obtained is compared to `firstSlot` and `lastSlot` of the ***smashBrosTierListSlots.json*** file in order to find in which tier is the character:

```json
	{
		"name": "B-",
		"firstSlot": 40,
		"lastSlot": 50,
		"totalSidesPoints": 8
	},
	{
		"name": "C+",
		"firstSlot": 51,
		"lastSlot": 60,
		"totalSidesPoints": 6
	},
	{
		"name": "C-",
		"firstSlot": 61,
		"lastSlot": 65,
		"totalSidesPoints": 6
	},
```

Finally, total number of sides of a character is the field `totalSidesPoints` of the character's tier. In the previous extrats, **Mega Man** is **B-** tier so his stone will have a total of **8 points** and **Wii Fit Trainer** is **C-** tier so her stone will have **6 points** in total.

</details>
