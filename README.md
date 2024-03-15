# Egyptian ID Number Decoder

This JavaScript program decodes the information encoded in an Egyptian national ID number. It extracts the following details from the ID number : 
* Birth date
* Birth place
* Birth order
* Gender
## Demo :
[Egyptian National Id Decoder](https://ahmedsaleh020.github.io/national-id-extractor/)
## How to use:

* Enter your 14-digit Egyptian national ID number in the input field.
* Click the "بحث" button.
* The program will display the extracted information in the respective fields.
### Example:
If you enter the ID number 322020101010102, the program will display the following information:
```
{
  Birth date: 10/01/2020
  Birth place: سوهاج
  Birth order: 1
  gender: ذكر 
}
```

### Technical details:

The program uses the following functions to extract the information from the ID number:

* validation(id): Validates the ID number and displays an error message if it is invalid.
* extractData(id): Extracts the different parts of the ID number and stores them in variables.
* displayData(): Displays the extracted information in the respective fields.

## Feedback:

If you have any feedback or suggestions, please feel free to contact me.

Thank you for using this program!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributing:

If you would like to contribute to this program, please fork the repository and submit a pull request.
