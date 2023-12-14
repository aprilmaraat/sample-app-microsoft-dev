using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class MoneyDescriptionController : ControllerBase
{
    private static readonly string[] Units = { "", "thousand", "million", "billion" };
    private static readonly string[] Ones =
    {
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    };
    private static readonly string[] Tens =
    {
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    };

    [HttpGet]
    public ActionResult<string> GetMoneyDescription(decimal amount)
    {
        if (amount < 0 || amount > 999999999.99m)
        {
            return BadRequest("Invalid amount. Please provide a value between 0 and 999,999,999.99.");
        }

        var result = ConvertToMoneyWords(amount);

        string moneyDescription = char.ToUpper(result[0]) + result.Substring(1);
        return Ok(moneyDescription);
    }

    private string ConvertToMoneyWords(decimal amount)
    {
        int dollars = (int)amount;
        int cents = (int)((amount - dollars) * 100);

        string dollarsWords = ConvertNumberToWords(dollars);
        string centsWords = ConvertNumberToWords(cents);

        string description = $"{dollarsWords} dollars and {centsWords} cents";
        return description;
    }

    private string ConvertNumberToWords(int number)
    {
        if (number == 0)
        {
            return "zero";
        }

        var words = "";
        var unitIndex = 0;

        do
        {
            var chunk = number % 1000;
            if (chunk != 0)
            {
                var chunkWords = ConvertChunkToWords(chunk);
                words = $"{chunkWords} {Units[unitIndex]} {words}";
            }

            number /= 1000;
            unitIndex++;
        } while (number > 0);

        return words.Trim();
    }

    private static string ConvertChunkToWords(int number)
    {
        var words = "";

        // Convert hundreds
        if (number >= 100)
        {
            words += $"{Ones[number / 100]} hundred ";
            number %= 100;
        }

        // Convert tens and ones
        if (number >= 20)
        {
            words += $"{Tens[number / 10]} ";
            number %= 10;
        }

        if (number > 0)
        {
            words += $"{Ones[number]} ";
        }

        return words.Trim();
    }
}
