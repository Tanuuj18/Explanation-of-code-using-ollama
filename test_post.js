(async () => {
  try {
    const cppCode = `#include <iostream>
#include <vector>
#include <algorithm>

double average(const std::vector<int>& nums) {
    if (nums.empty()) return 0.0;

    int sum = 0;
    for (int n : nums) {
        sum += n;
    }
    return static_cast<double>(sum) / nums.size();
}

int main() {
    int n;
    std::cout << "How many numbers? ";
    std::cin >> n;

    std::vector<int> numbers(n);
    std::cout << "Enter " << n << " integers:\n";
    for (int i = 0; i < n; ++i) {
        std::cin >> numbers[i];
    }

    double avg = average(numbers);
    int maxValue = *std::max_element(numbers.begin(), numbers.end());

    std::cout << "Average: " << avg << std::endl;
    std::cout << "Maximum: " << maxValue << std::endl;

    return 0;
}
`;

    const res = await fetch('http://localhost:5000/api/explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: cppCode })
    });
    const text = await res.text();
    console.log(text);
  } catch (err) {
    console.error('Request error', err);
  }
})();
